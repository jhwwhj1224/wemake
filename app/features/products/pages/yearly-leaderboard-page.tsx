import type { Route } from "./+types/yearly-leaderboard-page";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Yearly Leaderboard | WeMake" }];
}

export function loader({ params }: Route.LoaderArgs) {
  return { year: params.year ?? "" };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function YearlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return <div className="p-6">Yearly Leaderboard: {loaderData.year}</div>;
}
