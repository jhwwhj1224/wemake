import { Link } from "react-router";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface TeamCardProps {
  teamId: string;
  leaderName: string;
  leaderAvatarUrl: string;
  leaderAvatarFallback: string;
  roles: string[];
  projectDescription: string;
}

export function TeamCard({
  teamId,
  leaderName,
  leaderAvatarUrl,
  leaderAvatarFallback,
  roles,
  projectDescription,
}: TeamCardProps) {
  return (
    <Card className="bg-transparent transition-colors hover:bg-card/50">
      <Link to={`/teams/${teamId}`} className="block">
        <CardHeader className="flex flex-row items-center gap-2">
          <CardTitle className="text-base">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 text-base shadow-sm"
            >
              <span>{leaderName}</span>
              <Avatar className="size-4">
                <AvatarImage src={leaderAvatarUrl} alt="" />
                <AvatarFallback>{leaderAvatarFallback}</AvatarFallback>
              </Avatar>
            </Badge>
            <span className="text-base"> is looking for</span>
            {roles.map((role, index) => (
              <Badge key={`${role}-${index}`} className="text-base">
                {role}
              </Badge>
            ))}
            <span> to build </span>
            <span> {projectDescription} </span>
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex justify-end">
        <Button variant="link" asChild className="p-0 text-base">
          <Link to={`/teams/${teamId}`}>Join Team &rarr;</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
