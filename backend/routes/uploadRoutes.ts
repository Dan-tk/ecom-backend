import path from "path";
import express, { Request, Response } from "express";
import multer, { FileFilterCallback } from "multer";

// Define a type for the request object to include file
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, "uploads/");
  },

  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

const fileFilterr: any = (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Images only"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilterr });
const uploadSingleImage = upload.single("image");

router.post("/", (req: MulterRequest, res: Response) => {
  uploadSingleImage(req, res, (err: any) => {
    if (err) {
      console.error("Upload error:", err);
      console.log("Request file:", req.file);
      res.status(400).send({ message: err.message });
    } else if (req.file) {
      res.status(200).send({
        message: "Image uploaded successfully",
        image: `/${req.file.path}`,
      });
    } else {
      res.status(400).send({ message: "No image file provided" });
    }
  });
});

export default router;
