import { StarIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface ReviewCardProps {
  avatarImageSrc: string;
  avatarFallback: string;
  name: string;
  username: string;
  rating: number;
  content: string;
  postedAt: string;
}

export function ReviewCard({
  avatarImageSrc,
  avatarFallback,
  name,
  username,
  rating,
  content,
  postedAt,
}: ReviewCardProps) {
  const safeRating = Math.max(0, Math.min(5, Math.floor(rating)));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={avatarImageSrc} alt="" />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: safeRating }).map((_, index) => (
          <StarIcon key={index} className="size-6" fill="currentColor" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{postedAt}</span>
    </div>
  );
}
