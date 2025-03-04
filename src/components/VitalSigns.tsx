
import React from "react";
import { Thermometer, Sun, Shield, Clock } from "lucide-react";

const VitalSigns = () => {
  // Mock data
  const vitalData = {
    stressLevel: 32, // 0-100
    bodyTemperature: 98.6, // °F
    energyLevel: 75, // 0-100
    monitoringTime: "6h 23m"
  };
  
  // Helper function to determine the status color based on the value
  const getStatusColor = (value: number, type: 'stress' | 'temp' | 'energy') => {
    if (type === 'stress') {
      if (value < 30) return "text-dashboard-green";
      if (value < 70) return "text-dashboard-orange";
      return "text-dashboard-red";
    } else if (type === 'temp') {
      if (value < 97.0 || value > 99.5) return "text-dashboard-orange";
      return "text-dashboard-green";
    } else { // energy
      if (value < 30) return "text-dashboard-orange";
      return "text-dashboard-green";
    }
  };
  
  const stressColor = getStatusColor(vitalData.stressLevel, 'stress');
  const tempColor = getStatusColor(vitalData.bodyTemperature, 'temp');
  const energyColor = getStatusColor(vitalData.energyLevel, 'energy');
  
  return (
    <div className="bg-card rounded-xl p-5 shadow-neo border border-border/50 animate-fade-in opacity-0 animation-delay-400 animation-fill-mode-forwards">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-dashboard-green/20 p-1.5 rounded-md">
            <Shield className="text-dashboard-green h-4 w-4" />
          </div>
          <h2 className="text-lg font-medium">Vital Signs</h2>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Monitoring: {vitalData.monitoringTime}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Stress Level */}
        <div className="p-4 bg-muted/20 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-dashboard-purple" />
              <span className="text-sm font-medium">Stress Level</span>
            </div>
            <span className={`text-sm font-bold ${stressColor}`}>{vitalData.stressLevel}%</span>
          </div>
          
          <div className="w-full bg-muted/30 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full" 
              style={{ 
                width: `${vitalData.stressLevel}%`,
                background: vitalData.stressLevel < 30
                  ? 'linear-gradient(90deg, #10B981 0%, #53c4de 100%)' 
                  : vitalData.stressLevel < 70
                    ? 'linear-gradient(90deg, #53c4de 0%, #FFA94D 100%)'
                    : 'linear-gradient(90deg, #FFA94D 0%, #EF4444 100%)'
              }}
            ></div>
          </div>
          
          <p className="mt-2 text-xs text-muted-foreground">
            {vitalData.stressLevel < 30
              ? "Low stress levels. Relaxed state."
              : vitalData.stressLevel < 70
                ? "Moderate stress. Normal daily activity."
                : "High stress detected. Consider relaxation."}
          </p>
        </div>
        
        {/* Body Temperature */}
        <div className="p-4 bg-muted/20 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Thermometer className="h-4 w-4 text-dashboard-pink" />
              <span className="text-sm font-medium">Body Temperature</span>
            </div>
            <span className={`text-sm font-bold ${tempColor}`}>{vitalData.bodyTemperature}°F</span>
          </div>
          
          <div className="flex items-center gap-1 mt-3">
            <span className="text-xs text-muted-foreground">96.0°F</span>
            <div className="flex-1 h-2.5 bg-muted/30 rounded-full relative">
              <div className="absolute top-0 bottom-0 bg-dashboard-pink rounded-full" style={{ 
                left: '20%', 
                right: '20%',
                opacity: 0.2
              }}></div>
              <div 
                className="absolute top-0 bottom-0 w-2 bg-dashboard-pink rounded-full"
                style={{ 
                  left: `${(vitalData.bodyTemperature - 96) / (102 - 96) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
              ></div>
            </div>
            <span className="text-xs text-muted-foreground">102.0°F</span>
          </div>
          
          <p className="mt-2 text-xs text-muted-foreground">
            {vitalData.bodyTemperature < 97.0
              ? "Below normal range. Consider warming up."
              : vitalData.bodyTemperature <= 99.5
                ? "Normal body temperature range."
                : "Elevated temperature detected."}
          </p>
        </div>
        
        {/* Energy Level */}
        <div className="p-4 bg-muted/20 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sun className="h-4 w-4 text-dashboard-orange" />
              <span className="text-sm font-medium">Energy Level</span>
            </div>
            <span className={`text-sm font-bold ${energyColor}`}>{vitalData.energyLevel}%</span>
          </div>
          
          <div className="w-full bg-muted/30 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full bg-gradient-to-r from-dashboard-orange to-dashboard-pink" 
              style={{ width: `${vitalData.energyLevel}%` }}
            ></div>
          </div>
          
          <p className="mt-2 text-xs text-muted-foreground">
            {vitalData.energyLevel < 30
              ? "Low energy. Consider rest and hydration."
              : vitalData.energyLevel < 70
                ? "Moderate energy levels."
                : "High energy detected. Optimal condition."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VitalSigns;
