import Category from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { Request, Response } from 'express';

// Define a type for the request body used in create and update category
interface CategoryRequestBody {
  name: string;
}

// Create a category
const createCategory = asyncHandler(async (req: Request<{}, {}, CategoryRequestBody>, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  const existingCategory = await Category.findOne({ name });

  if (existingCategory) {
    return res.status(400).json({ error: "Category already exists" });
  }

  const category = new Category({ name });
  const savedCategory = await category.save();
  res.status(201).json(savedCategory);
});

// Update a category
//@ts-ignore
const updateCategory = asyncHandler(async (req: Request<{ categoryId: string }, {}, CategoryRequestBody>, res: Response) => {
  const { name } = req.body;
  const { categoryId } = req.params;

  const category = await Category.findById(categoryId);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  category.name = name || category.name;
  const updatedCategory = await category.save();
  res.json(updatedCategory);
});

// Remove a category
//@ts-ignore
const removeCategory = asyncHandler(async (req: Request<{ categoryId: string }>, res: Response) => {
  const { categoryId } = req.params;

  const removedCategory = await Category.findByIdAndRemove(categoryId);

  if (!removedCategory) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json({ message: "Category removed successfully" });
});

// List all categories
const listCategory = asyncHandler(async (req: Request, res: Response) => {
  const categories = await Category.find({});
  res.json(categories);
});

// Read a category
//@ts-ignore
const readCategory = asyncHandler(async (req: Request<{ id: string }>, res: Response) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  res.json(category);
});

export {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
};
