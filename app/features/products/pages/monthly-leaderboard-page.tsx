import type { Route } from "./+types/monthly-leaderboard-page";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Monthly Leaderboard | WeMake" }];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year ?? "",
    month: params.month ?? "",
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function MonthlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="p-6">
      Monthly Leaderboard: {loaderData.year}-{loaderData.month}
    </div>
  );
}
