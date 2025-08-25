import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold">
          <span className="text-foreground">FITMIND</span>
          <span className="text-primary ml-2">CARE</span>
        </h1>
        <div className="text-xs text-muted-foreground">
          Powered by creative IA
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">Login</span>
        <Button variant="ghost" size="icon" className="w-8 h-8">
          <LogIn className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;