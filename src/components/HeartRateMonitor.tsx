
import React from "react";
import { Heart, TrendingUp, TrendingDown, Activity } from "lucide-react";

const HeartRateMonitor = () => {
  // Mock data
  const currentBPM = 75;
  const minBPM = 62;
  const avgBPM = 72;
  const maxBPM = 120;
  
  // Calculate percentage for circular progress
  const calculatePercentage = (value: number) => {
    // Map BPM to percentage (considering 50-180 as the range)
    const min = 50;
    const max = 180;
    const percentage = ((value - min) / (max - min)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };
  
  const bpmPercentage = calculatePercentage(currentBPM);
  const circumference = 2 * Math.PI * 50; // 50 is the radius of the circle
  const strokeDashoffset = circumference - (bpmPercentage / 100) * circumference;
  
  // Determine status color based on BPM
  const getStatusColor = (bpm: number) => {
    if (bpm < 60) return "text-dashboard-blue";
    if (bpm > 100) return "text-dashboard-orange";
    return "text-dashboard-green";
  };
  
  const statusColor = getStatusColor(currentBPM);
  const strokeColor = statusColor.includes("blue") 
    ? "#53c4de" 
    : statusColor.includes("orange") 
      ? "#FFA94D" 
      : "#10B981";

  return (
    <div className="bg-card rounded-xl p-5 shadow-neo border border-border/50 animate-fade-in opacity-0 animation-delay-200 animation-fill-mode-forwards">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-dashboard-pink/20 p-1.5 rounded-md">
          <Heart className="text-dashboard-pink h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium">Heart Rate Monitor</h2>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
        <div className="circle-progress-container">
          <svg className="circle-progress" width="120" height="120">
            <circle className="circle-bg" cx="60" cy="60" r="50" />
            <circle 
              className="circle-progress-value" 
              cx="60" 
              cy="60" 
              r="50" 
              strokeDasharray={circumference} 
              strokeDashoffset={strokeDashoffset}
              style={{ stroke: strokeColor }}
            />
          </svg>
          <div className="progress-text flex flex-col items-center">
            <span className="text-2xl font-bold">{currentBPM}</span>
            <span className="text-xs text-muted-foreground">BPM</span>
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-dashboard-blue" />
              <span className="text-sm font-medium">Minimum</span>
            </div>
            <span className="text-sm font-bold text-dashboard-blue">{minBPM} BPM</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-dashboard-purple" />
              <span className="text-sm font-medium">Average</span>
            </div>
            <span className="text-sm font-bold text-dashboard-purple">{avgBPM} BPM</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-dashboard-pink" />
              <span className="text-sm font-medium">Maximum</span>
            </div>
            <span className="text-sm font-bold text-dashboard-pink">{maxBPM} BPM</span>
          </div>
        </div>
      </div>
      
      <div className="text-center p-3 rounded-lg bg-muted/20">
        <span className="text-sm">Current Status: </span>
        <span className={`text-sm font-medium ${statusColor}`}>
          {currentBPM < 60 
            ? "Bradycardia (Low Heart Rate)" 
            : currentBPM > 100 
              ? "Tachycardia (High Heart Rate)" 
              : "Normal Heart Rate"}
        </span>
      </div>
    </div>
  );
};

export default HeartRateMonitor;
