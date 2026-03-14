import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your organization",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the categories of your products",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a product to the community",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote a product to the community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find a full-time job",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "Find an internship",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a job to the community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in the community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in the community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in the community",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a post to the community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in the community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team to the community",
        to: "/teams/create",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50 border-b border-border">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-xl">
          WeMake
        </Link>
        <Separator orientation="vertical" className=" mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => {
              const value = menu.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <NavigationMenuItem key={menu.name} value={value}>
                  {menu.items ? (
                    <>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {menu.items.map((item) => (
                          <NavigationMenuItem key={item.name}>
                            <NavigationMenuLink>
                              <Link to={item.to}>{item.name}</Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink>
                      <Link to={menu.to}>{menu.name}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
