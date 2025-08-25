import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface HealthMetricCardProps {
  icon: LucideIcon;
  title: string;
  unit?: string;
  color: "bmi" | "rbc" | "weight" | "height";
}

const HealthMetricCard = ({ icon: Icon, title, unit, color }: HealthMetricCardProps) => {
  const colorClasses = {
    bmi: "from-medical-bmi/20 to-medical-bmi/5",
    rbc: "from-medical-rbc/20 to-medical-rbc/5", 
    weight: "from-medical-weight/20 to-medical-weight/5",
    height: "from-medical-height/20 to-medical-height/5"
  };

  const iconColors = {
    bmi: "text-medical-bmi",
    rbc: "text-medical-rbc",
    weight: "text-medical-weight", 
    height: "text-medical-height"
  };

  return (
    <Card className={`bg-gradient-to-br ${colorClasses[color]} border-border/50 hover:border-border transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-card/50 ${iconColors[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
            {title}
          </span>
        </div>
        
        {unit && (
          <div className="mb-3">
            <span className="text-xs text-muted-foreground">({unit})</span>
          </div>
        )}

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">Please submit the reports</p>
          <Button size="sm" variant="secondary" className="w-full text-xs">
            Submit Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthMetricCard;