import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Submit Product | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function SubmitPage() {
  return <div className="p-6">Submit Product</div>;
}
