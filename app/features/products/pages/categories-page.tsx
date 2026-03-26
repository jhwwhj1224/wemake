import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/categories-page";
import { CategoryCard } from "~/features/products/components/category-card";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Product Categories | WeMake" }];
};

export default function CategoriesPage() {
  return (
    <div>
      <Hero title="Product Categories" subtitle="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`category-${index}`}
            id={`category-${index}`}
            name="Category Name"
            description="Browse products in this category"
          />
        ))}
      </div>
    </div>
  );
}
