import type { Route } from "./+types/weekly-leaderboard-page";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Weekly Leaderboard | WeMake" }];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year ?? "",
    week: params.week ?? "",
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="p-6">
      Weekly Leaderboard: {loaderData.year} W{loaderData.week}
    </div>
  );
}
