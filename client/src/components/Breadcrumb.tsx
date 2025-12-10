import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center gap-2 text-sm", className)} aria-label="Breadcrumb">
      {/* Home Icon */}
      <Link href="/">
        <div className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors cursor-pointer">
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Home</span>
        </div>
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            
            {item.path && !isLast ? (
              <Link href={item.path}>
                <span className="text-muted-foreground hover:text-white transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ) : (
              <span className={cn(
                isLast ? "text-white font-medium" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
