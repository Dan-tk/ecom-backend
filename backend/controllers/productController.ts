import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import Product from "../models/productModel";
import { IProduct } from "../models/productModel";
import { IReview } from "../models/reviewModel";
import { IUser } from "../models/userModel";
import createToken from "../utils/createToken";

// Define interfaces for request bodies
interface AddProductFields {
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  brand: string;
}

interface UpdateProductFields extends AddProductFields {}

interface ReviewRequestBody {
  rating: number;
  comment: string;
}

const addProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    /* console.log("Received Fields:", reeq.fields);
    console.log("Received Files:", req.files); */
    const reeq:any =req
    const { name, description, price, category, quantity, brand }: AddProductFields = reeq.fields;

    // Validation
    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !brand:
        return res.json({ error: "Brand is required" });
      case !description:
        return res.json({ error: "Description is required" });
      case !price:
        return res.json({ error: "Price is required" });
      case !category:
        return res.json({ error: "Category is required" });
      case !quantity:
        return res.json({ error: "Quantity is required" });
    }

    const product = new Product({ ...reeq.fields });
    await product.save();
    res.json(product);
  } catch (error ) {
    console.error(error);
    res.status(400).json({  error });
  }
});

const updateProductDetails = asyncHandler(async (req: Request, res: Response) => {
  try {
    const reeq:any =req
    const { name, description, price, category, quantity, brand }: UpdateProductFields = reeq.fields;

    // Validation
    switch (true) {
      case !name:
        return res.json({ error: "Name is required" });
      case !brand:
        return res.json({ error: "Brand is required" });
      case !description:
        return res.json({ error: "Description is required" });
      case !price:
        return res.json({ error: "Price is required" });
      case !category:
        return res.json({ error: "Category is required" });
      case !quantity:
        return res.json({ error: "Quantity is required" });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { ...reeq.fields },
      { new: true }
    );

    await product?.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error});
  }
});

const removeProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const fetchProducts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const pageSize = 6;

    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword as string,
            $options: "i",
          },
        }
      : {};

    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword }).limit(pageSize);

    res.json({
      products,
      page: 1,
      pages: Math.ceil(count / pageSize),
      hasMore: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const fetchProductById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Product not found" });
  }
});

const fetchAllProducts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const addProductReview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const reeq:any =req
    const { rating, comment }: ReviewRequestBody = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r: IReview) => r.user.toString() === (reeq.user as IUser)._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already reviewed");
      }

      const review: any= {
        name: (reeq.user as IUser).username,
        rating: Number(rating),
        comment,
        user: (reeq.user as IUser)._id,
      };

      product.reviews.push(review);

      product.numReviews = product.reviews.length;

      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
});

const fetchTopProducts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).sort({ rating: -1 }).limit(4);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
});

const fetchNewProducts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ _id: -1 }).limit(5);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
});

const filterProducts = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { checked, radio }: { checked: string[]; radio: number[] } = req.body;

    let args: { category?: string[]; price?: { $gte: number; $lte: number } } = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };

    const products = await Product.find(args);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts,
  filterProducts,
};
