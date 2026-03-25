import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import z from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    weekYear: Number(params.year),
    weekNumber: Number(params.week),
  })
    .setZone("America/Los_Angeles")
    .setLocale("en-US");
  return [
    {
      title: `The best week of ${date.startOf("week").toLocaleString(DateTime.DATE_SHORT)} - ${date.endOf("week").toLocaleString(DateTime.DATE_SHORT)} | WeMake`,
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
    weekYear: parsedParams.year,
    weekNumber: parsedParams.week,
  });
  if (!date.isValid) {
    throw data(
      { error_code: "INVALID_DATE", message: "Invalid date" },
      { status: 400 },
    );
  }
  const today = DateTime.now().startOf("week");
  if (date > today) {
    throw data(
      { error_code: "FUTURE_DATE", message: "Future date" },
      { status: 400 },
    );
  }
  return { ...parsedParams };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("week"));
  return (
    <div className="space-y-10">
      <Hero
        title={`The best week of ${urlDate.startOf("week").toLocaleString(DateTime.DATE_SHORT)} - ${urlDate.endOf("week").toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}
          >
            <ArrowLeftIcon className="w-4 h-4" />
            {previousWeek.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}
            >
              {nextWeek.toLocaleString(DateTime.DATE_SHORT)}
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
