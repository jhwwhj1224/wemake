import type { MetaFunction } from "react-router";
import type { Route } from "./+types/leaderboard-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Leaderboards | WeMake" }];
};

export default function LeaderboardPage() {
  return (
    <div>
      <div className="flex flex-col py-20 justify-center items-center rounded-md bg-linear-to-t from-background to-primary/10">
        <h1 className="text-5xl font-bold">Leaderboards</h1>
        <p className="text-2xl font-light text-foreground">
          the most popular products on WeMake
        </p>
      </div>
    </div>
  );
}
