import { ChevronUpIcon, EyeIcon, MessageCircleCheckIcon } from "lucide-react";
import { Link } from "react-router";

import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  votesCount: number;
}

export function ProductCard({
  id,
  name,
  description,
  commentsCount,
  viewsCount,
  votesCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <Card className="w-full bg-transparent p-4 hover:bg-primary/10">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center gap-px text-xs text-muted-foreground">
                <MessageCircleCheckIcon className="h-4 w-4 text-green-500" />
                <span>{commentsCount}</span>
              </div>
              <div className="flex items-center gap-px text-xs text-muted-foreground">
                <EyeIcon className="h-4 w-4 text-green-500" />
                <span>{viewsCount}</span>
              </div>
            </div>
          </CardDescription>
          <CardAction>
            <Button variant="outline" className="flex h-14 cursor-pointer">
              <ChevronUpIcon className="h-4 w-4 shrink-0" />
              <span>{votesCount}</span>
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  );
}
