import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Users, Play } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  lessons: number;
  level: "Iniciante" | "Intermediário" | "Avançado";
  price: number;
  originalPrice?: number;
  spotsLeft?: number;
  isNew?: boolean;
  onPurchase?: () => void;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  duration,
  lessons,
  level,
  price,
  originalPrice,
  spotsLeft,
  isNew,
  onPurchase,
}: CourseCardProps) => {
  const levelVariant = {
    Iniciante: "level",
    Intermediário: "gold",
    Avançado: "premium",
  }[level] as "level" | "gold" | "premium";

  return (
    <Card variant="interactive" className="group overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {isNew && <Badge variant="new">Novo</Badge>}
          <Badge variant={levelVariant}>{level}</Badge>
        </div>
        
        {/* Scarcity Badge */}
        {spotsLeft && spotsLeft <= 10 && (
          <div className="absolute right-3 top-3">
            <Badge variant="scarcity">Últimas {spotsLeft} vagas</Badge>
          </div>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-warm-lg">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
      </div>

      <CardContent className="space-y-3 p-5">
        <h3 className="font-display text-lg font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} aulas</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border p-5">
        <div className="space-y-0.5">
          {originalPrice && (
            <p className="font-body text-xs text-muted-foreground line-through">
              R$ {originalPrice.toFixed(2)}
            </p>
          )}
          <p className="font-display text-xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Link to={`/curso/${id}`}>
            <Button variant="outline" size="sm">
              Ver Curso
            </Button>
          </Link>
          <Button variant="cta" size="sm" onClick={onPurchase}>
            Comprar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
