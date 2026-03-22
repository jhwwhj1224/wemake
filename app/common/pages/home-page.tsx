import { Link, type MetaFunction } from "react-router";

import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { ProductCard } from "~/features/products/components/product-card";
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
    </div>
  );
}
