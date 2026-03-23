import type { Route } from "./+types/daily-leaderboard-page";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Daily Leaderboard | WeMake" }];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year ?? "",
    month: params.month ?? "",
    day: params.day ?? "",
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="p-6">
      Daily Leaderboard: {loaderData.year}-{loaderData.month}-{loaderData.day}
    </div>
  );
}
