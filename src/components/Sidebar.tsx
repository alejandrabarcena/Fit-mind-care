import { Activity, FileText, UserRound, MapPin, Phone, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "dashboard", isActive: true },
    { icon: FileText, label: "reports" },
    { icon: UserRound, label: "health advisor" },
    { icon: MapPin, label: "nearby doctors" },
    { icon: Phone, label: "emergency contacts" }
  ];

  return (
    <div className="w-20 min-h-screen bg-gradient-to-b from-background to-background/95 border-r border-border flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-medical-weight rounded-xl flex items-center justify-center">
          <Activity className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-4 flex-1">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant={item.isActive ? "default" : "ghost"}
            size="icon"
            className={`w-12 h-12 rounded-xl transition-all duration-200 ${
              item.isActive 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <item.icon className="w-5 h-5" />
          </Button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        <div className="w-8 h-8 bg-secondary rounded-lg"></div>
      </div>
    </div>
  );
};

export default Sidebar;