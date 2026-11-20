import type { Category, Course } from '../../domain/catalog';

export type CategoryCard = Category & { featuredCourseTitle: string | undefined };

export function buildCategoryCards(categories: readonly Category[], course: Course): CategoryCard[] {
  return categories.map((category) => ({
    ...category,
    featuredCourseTitle: category.id === course.categoryId ? course.title : undefined,
  }));
}
