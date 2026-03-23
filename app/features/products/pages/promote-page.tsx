import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Promote Product | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function PromotePage() {
  return <div className="p-6">Promote Product</div>;
}
