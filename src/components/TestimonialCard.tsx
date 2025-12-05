import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  courseName?: string;
}

const TestimonialCard = ({
  name,
  role,
  avatar,
  content,
  rating,
  courseName,
}: TestimonialCardProps) => {
  return (
    <Card variant="elevated" className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        {/* Quote icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Quote className="h-5 w-5 text-primary" />
        </div>

        {/* Rating */}
        <div className="mb-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-gold text-gold" : "fill-muted text-muted"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
          "{content}"
        </p>

        {/* Course name */}
        {courseName && (
          <p className="mb-4 font-body text-xs text-primary">
            Curso: {courseName}
          </p>
        )}

        {/* Author */}
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div>
            <p className="font-display text-sm font-semibold">{name}</p>
            <p className="font-body text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
