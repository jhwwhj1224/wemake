import { cn } from "~/lib/utils";

interface SectionHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ title, subtitle, className = "" }: SectionHeroProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-md bg-linear-to-t from-background to-primary/10 py-20",
        className,
      )}
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-2xl font-light text-foreground">{subtitle}</p>
      )}
    </div>
  );
}
