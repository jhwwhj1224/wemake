import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Part-time Jobs | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function PartTimeJobPage() {
  return <div className="p-6">Part-time Jobs</div>;
}
