import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Internship Jobs | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function InternshipJobPage() {
  return <div className="p-6">Internship Jobs</div>;
}
