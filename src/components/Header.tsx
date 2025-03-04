
import React from "react";
import { Bell, Settings, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/50 backdrop-blur-lg border-b border-border/50 py-4 px-6 flex justify-between items-center mb-6 animate-fade-in opacity-0 animation-delay-100 animation-fill-mode-forwards">
      <div className="flex items-center gap-3">
        <div className="bg-dashboard-pink p-2 rounded-md">
          <Heart className="text-white h-5 w-5 heart-beat" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight">Health Monitor Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-dashboard-pink rounded-full"></span>
        </div>
        <Settings className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
        <div className="w-8 h-8 rounded-full bg-dashboard-purple flex items-center justify-center">
          <span className="text-sm font-medium">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
