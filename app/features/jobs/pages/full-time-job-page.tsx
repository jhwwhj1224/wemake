import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Full-time Jobs | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function FullTimeJobPage() {
  return <div className="p-6">Full-time Jobs</div>;
}
