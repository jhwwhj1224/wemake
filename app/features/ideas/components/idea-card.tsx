import { Link } from "react-router";

import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  ideaId: string;
  title: string;
  description: string;
  viewsCount: number;
  likesCount: number;
  postedAt: string;
  claimed?: boolean;
}

export function IdeaCard({
  ideaId,
  title,
  description,
  viewsCount,
  likesCount,
  postedAt,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent transition-colors hover:bg-card/50">
      <CardHeader>
        <Link to={`/ideas/${ideaId}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed &&
                  "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground",
              )}
            >
              {title}
            </span>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-row gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <EyeIcon className="size-4" />
          <span>{viewsCount}</span>
        </div>
        <DotIcon className="size-4" />
        <span>{postedAt}</span>
      </CardContent>
      <CardContent className="flex flex-row justify-end gap-2">
        <Button type="button" variant="outline">
          <HeartIcon className="size-4" />
          <span>{likesCount}</span>
        </Button>
        {!claimed ? (
          <Button variant="link" asChild className="p-0 text-lg">
            <Link
              to={`/ideas/${ideaId}/claim`}
              className="flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Claim Idea &rarr;
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled cursor-not-allowed>
            <LockIcon className="size-4" />
            <span>Claimed</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
