import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ICategory } from './category.interface';

const createCategory = async (data: Category) => {
  const result = await prisma.category.create({
    data,
    select: { title: true, id: true },
  });
  return result;
};

const getCategories = async (): Promise<ICategory[] | null> => {
  const result = await prisma.category.findMany({
    select: { title: true, id: true },
  });
  return result;
};
const getCategory = async (id: string): Promise<ICategory | null> => {
  const result = await prisma.category.findUnique({
    where: { id },
    select: { id: true, title: true },
  });
  return result;
};

const updateCategory = async (
  id: string,
  payload: Category
): Promise<Category | null> => {
  const result = await prisma.category.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteCategory = async (id: string): Promise<Category | null> => {
  await prisma.books.deleteMany({
    where: {
      categoryId: id,
    },
  });

  const result = await prisma.category.delete({
    where: { id },
  });
  return result;
};
export const CategoryService = {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
};
