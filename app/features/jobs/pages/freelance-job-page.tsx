import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Freelance Jobs | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function FreelanceJobPage() {
  return <div className="p-6">Freelance Jobs</div>;
}
