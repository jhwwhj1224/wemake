import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Remote Jobs | WeMake" }];
};

export function loader() {
  return {};
}

export function action() {
  return {};
}

export default function RemoteJobPage() {
  return <div className="p-6">Remote Jobs</div>;
}
