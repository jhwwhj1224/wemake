import { Link, type MetaFunction } from "react-router";

import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { ProductCard } from "~/features/products/components/product-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | WeMake" },
    { name: "description", content: "Welcome to WeMake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link
              to="/products/leaderboards"
              className="flex items-center gap-2"
            >
              Explore All Products &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`product-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Lastest Descussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community" className="flex items-center gap-2">
              Explore All Discussions &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            postId={`post-${index}`}
            avatarImageSrc="https://github.com/apple.png"
            avatarFallback="N"
            title="what is the best productivity tool?"
            author="John Doe"
            category="Productivity"
            postedAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find the best ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community" className="flex items-center gap-2">
              Explore All Ideas &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            ideaId={`idea-${index}`}
            title="A startup that creates a new type of AI agent that can help you with your daily tasks."
            description="A startup that creates a new type of AI agent"
            viewsCount={123}
            likesCount={123}
            postedAt="12 hours ago"
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs" className="flex items-center gap-2">
              Explore All Jobs &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            jobId={`job-${index}`}
            companyLogoUrl="https://github.com/facebook.png"
            company="Facebook"
            postedAt="12 hours ago"
            title="Senior Software Engineer"
            tags={["Full-time", "Remote"]}
            salaryRange="$100,000 - $120,000"
            location="San Francisco, CA"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tighter">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams" className="flex items-center gap-2">
              Explore All Teams &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <TeamCard
            teamId={`team-${index}`}
            leaderName="@Huiwon"
            leaderAvatarUrl="https://github.com/inthertiger.png"
            leaderAvatarFallback="H"
            roles={["Backend Developer", "React Developer", "Product Manager"]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
