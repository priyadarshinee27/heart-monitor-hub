
import React from "react";
import { Heart, Clock } from "lucide-react";

interface HeartRateData {
  timestamp: string;
  heartRate: number;
  accelerometerX: number;
  accelerometerY: number;
  accelerometerZ: number;
}

const HeartRateDetail = () => {
  // Mock data
  const heartRateData: HeartRateData[] = [
    {
      timestamp: "2023-06-15 08:30:45",
      heartRate: 72,
      accelerometerX: 0.05,
      accelerometerY: 0.02,
      accelerometerZ: 1.01
    },
    {
      timestamp: "2023-06-15 08:35:12",
      heartRate: 75,
      accelerometerX: 0.08,
      accelerometerY: 0.03,
      accelerometerZ: 0.99
    },
    {
      timestamp: "2023-06-15 08:40:27",
      heartRate: 73,
      accelerometerX: 0.07,
      accelerometerY: 0.01,
      accelerometerZ: 1.02
    }
  ];

  return (
    <div className="bg-card rounded-xl p-5 shadow-neo border border-border/50 animate-fade-in opacity-0 animation-delay-200 animation-fill-mode-forwards">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-dashboard-pink/20 p-1.5 rounded-md">
            <Heart className="text-dashboard-pink h-4 w-4" />
          </div>
          <h2 className="text-lg font-medium">Heart Rate Detail</h2>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Real-time data</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Timestamp</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Heart Rate</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Accelerometer X</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Accelerometer Y</th>
              <th className="text-left p-2 text-sm font-medium text-muted-foreground">Accelerometer Z</th>
            </tr>
          </thead>
          <tbody>
            {heartRateData.map((data, index) => (
              <tr key={index} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                <td className="p-2 text-sm">{data.timestamp}</td>
                <td className="p-2 text-sm font-medium text-dashboard-pink">{data.heartRate} BPM</td>
                <td className="p-2 text-sm">{data.accelerometerX.toFixed(2)}</td>
                <td className="p-2 text-sm">{data.accelerometerY.toFixed(2)}</td>
                <td className="p-2 text-sm">{data.accelerometerZ.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HeartRateDetail;
