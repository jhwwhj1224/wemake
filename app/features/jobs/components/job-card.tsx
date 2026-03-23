import { Link } from "react-router";

import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface JobCardProps {
  jobId: string;
  companyLogoUrl: string;
  company: string;
  postedAt: string;
  title: string;
  tags: string[];
  salaryRange: string;
  location: string;
}

export function JobCard({
  jobId,
  companyLogoUrl,
  company,
  postedAt,
  title,
  tags,
  salaryRange,
  location,
}: JobCardProps) {
  const detailTo = `/jobs/${jobId}`;
  const applyTo = `/jobs/${jobId}/apply`;

  return (
    <Card className="bg-transparent transition-colors hover:bg-card/50">
      <Link to={detailTo} className="block">
        <CardHeader>
          <div className="mb-8 flex flex-row items-center gap-4">
            <img
              src={companyLogoUrl}
              alt="Company logo"
              className="size-10 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          <CardTitle className="text-xl">
            <span className="text-accent-foreground">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Link>
      <CardContent className="flex flex-row items-center justify-between">
        <Link to={detailTo} className="flex flex-col">
          <span className="text-sm font-medium text-muted-foreground">
            {salaryRange}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {location}
          </span>
        </Link>
        <Button variant="outline" asChild>
          <Link
            to={applyTo}
            className="hover:bg-accent hover:text-accent-foreground hover:cursor-pointer"
          >
            Apply Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
