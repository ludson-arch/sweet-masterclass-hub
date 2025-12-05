interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

const StepCard = ({ step, title, description }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step number */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-warm-md">
        {step}
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="mt-2 font-body text-sm text-muted-foreground max-w-xs mx-auto">
          {description}
        </p>
      </div>

      {/* Connector line (hidden on last item) */}
      <div className="absolute left-1/2 top-8 -z-10 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />
    </div>
  );
};

export default StepCard;
