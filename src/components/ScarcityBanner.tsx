import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, AlertTriangle } from "lucide-react";

interface ScarcityBannerProps {
  spotsLeft: number;
  endDate?: Date;
  variant?: "inline" | "banner";
}

const ScarcityBanner = ({
  spotsLeft,
  endDate,
  variant = "inline",
}: ScarcityBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!endDate) return;

    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-accent to-primary py-3">
        <div className="container flex flex-wrap items-center justify-center gap-4 text-center text-primary-foreground">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 animate-pulse" />
            <span className="font-body text-sm font-medium">
              Vagas esgotando!
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="font-body text-sm">
              Apenas <strong>{spotsLeft}</strong> vagas restantes
            </span>
          </div>

          {endDate && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="font-body text-sm">
                Turma fecha em:{" "}
                <strong>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </strong>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {spotsLeft <= 10 && (
        <Badge variant="scarcity" className="gap-1">
          <Users className="h-3 w-3" />
          Últimas {spotsLeft} vagas
        </Badge>
      )}

      {endDate && timeLeft.days <= 7 && (
        <Badge variant="destructive" className="gap-1">
          <Clock className="h-3 w-3" />
          {timeLeft.days}d {timeLeft.hours}h restantes
        </Badge>
      )}
    </div>
  );
};

export default ScarcityBanner;
