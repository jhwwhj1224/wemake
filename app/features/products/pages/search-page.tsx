import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Search Products | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function SearchPage() {
  return <div className="p-6">Search Products</div>;
}
