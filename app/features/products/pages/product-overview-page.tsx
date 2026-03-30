import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/product-overview-page";
import { ChevronUp, StarIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = ({ params }) => {
  return [{ title: `Product ${params.productId} | WeMake` }];
};

export function loader({ params }: Route.LoaderArgs) {
  return { productId: params.productId ?? "" };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">
          This product is a new product that is designed to help you with your
          needs.
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">
          This product is a new product that is designed to help you with your
          needs. This product is a new product that is designed to help you with
          your needs. This product is a new product that is designed to help you
          with your needs. This product is a new product that is designed to
          help you with your needs. This product is a new product that is
          designed to help you with your needs. This product is a new product
          that is designed to help you with your needs. This product is a new
          product that is designed to help you with your needs.
        </p>
      </div>
    </div>
  );
}
