import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Product Categories | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function CategoriesPage() {
  return <div className="p-6">Product Categories</div>;
}
