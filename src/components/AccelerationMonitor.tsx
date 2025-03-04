
import React from "react";
import { Activity, AlertTriangle } from "lucide-react";

interface AccelerationData {
  timestamp: string;
  acceleration: number;
  gForce: number;
}

const AccelerationMonitor = () => {
  // Mock data
  const accelerationData: AccelerationData[] = [
    {
      timestamp: "2023-06-15 08:30:45",
      acceleration: 1.2,
      gForce: 0.12
    },
    {
      timestamp: "2023-06-15 08:35:12",
      acceleration: 2.8,
      gForce: 0.28
    },
    {
      timestamp: "2023-06-15 08:40:27",
      acceleration: 1.5,
      gForce: 0.15
    }
  ];

  return (
    <div className="bg-card rounded-xl p-5 shadow-neo border border-border/50 animate-fade-in opacity-0 animation-delay-300 animation-fill-mode-forwards">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-dashboard-blue/20 p-1.5 rounded-md">
            <Activity className="text-dashboard-blue h-4 w-4" />
          </div>
          <h2 className="text-lg font-medium">Acceleration Monitor</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-dashboard-blue/10 text-dashboard-blue">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dashboard-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-dashboard-blue"></span>
            </span>
            Monitoring
          </span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Timestamp</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Acceleration (m/s²)</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">G-Force</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {accelerationData.map((data, index) => (
              <tr key={index} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                <td className="p-2 text-sm">{data.timestamp}</td>
                <td className="p-2 text-sm">{data.acceleration.toFixed(2)} m/s²</td>
                <td className="p-2 text-sm">{data.gForce.toFixed(2)} G</td>
                <td className="p-2 text-sm">
                  {data.gForce > 0.20 ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-dashboard-orange/10 text-dashboard-orange">
                      <AlertTriangle className="h-3 w-3" />
                      Elevated
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-dashboard-green/10 text-dashboard-green">
                      Normal
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccelerationMonitor;
