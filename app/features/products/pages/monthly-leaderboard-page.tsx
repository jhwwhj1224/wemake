import { DateTime } from "luxon";
import type { Route } from "./+types/monthly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import z from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
  })
    .setZone("America/Los_Angeles")
    .setLocale("en-US");
  return [
    {
      title: `The best products of ${date.toLocaleString({ month: "long", year: "2-digit" })} | WeMake`,
    },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "INVALID_PARAMS", message: "Invalid params" },
      { status: 400 },
    );
  }
  const date = DateTime.fromObject({
    year: parsedParams.year,
    month: parsedParams.month,
  });
  if (!date.isValid) {
    throw data(
      { error_code: "INVALID_DATE", message: "Invalid date" },
      { status: 400 },
    );
  }
  const today = DateTime.now().startOf("month");
  if (date > today) {
    throw data(
      { error_code: "FUTURE_DATE", message: "Future date" },
      { status: 400 },
    );
  }
  return { ...parsedParams };
}

export default function MonthlyLeaderboardPagess({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("month"));
  return (
    <div className="space-y-10">
      <Hero
        title={`The best products of ${urlDate.toLocaleString({
          month: "long",
          year: "2-digit",
        })}`}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}
          >
            <ArrowLeftIcon className="w-4 h-4" />
            {previousMonth.toLocaleString({
              month: "long",
              year: "2-digit",
            })}
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}
            >
              {nextMonth.toLocaleString({
                month: "long",
                year: "2-digit",
              })}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="space-y-5 w-full max-w-3xl mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {error.message} / {error.name}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Error in daily leaderboard page</h1>
    </div>
  );
}
