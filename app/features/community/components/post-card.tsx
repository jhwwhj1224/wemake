import { Link } from "react-router";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  postId: string;
  avatarImageSrc: string;
  avatarFallback: string;
  title: string;
  author: string;
  category: string;
  postedAt: string;
}

export function PostCard({
  postId,
  avatarImageSrc,
  avatarFallback,
  title,
  author,
  category,
  postedAt,
}: PostCardProps) {
  return (
    <Link to={`/community/${postId}`} className="block">
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarImage src={avatarImageSrc} alt="" />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </CardTitle>
            <div className="flex flex-row items-center gap-2 text-sm text-muted-foreground">
              <span>{author} on</span>
              <span>{category}</span>
              <DotIcon className="size-4" />
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex justify-end">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
            Reply &rarr;
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
