
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Clock } from "lucide-react";

const HeartRateGraph = () => {
  // Mock ECG data - simulating a typical ECG waveform pattern
  const generateEcgData = () => {
    const data = [];
    // Generate 30 data points for the ECG
    for (let i = 0; i < 30; i++) {
      let value;
      
      if (i % 10 === 0) {
        // P wave
        value = 20;
      } else if (i % 10 === 1) {
        // P-R interval
        value = 10;
      } else if (i % 10 === 2) {
        // QRS complex start (Q)
        value = -5;
      } else if (i % 10 === 3) {
        // QRS complex peak (R)
        value = 100;
      } else if (i % 10 === 4) {
        // QRS complex end (S)
        value = -10;
      } else if (i % 10 === 5) {
        // S-T segment
        value = 15;
      } else if (i % 10 === 6) {
        // T wave
        value = 30;
      } else {
        // Baseline
        value = 10;
      }
      
      // Add some random variation
      value += Math.random() * 5 - 2.5;
      
      data.push({
        time: i,
        value: value
      });
    }
    return data;
  };
  
  const ecgData = generateEcgData();
  
  return (
    <div className="bg-card rounded-xl p-5 shadow-neo border border-border/50 animate-fade-in opacity-0 animation-delay-400 animation-fill-mode-forwards">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-dashboard-purple/20 p-1.5 rounded-md">
            <Activity className="text-dashboard-purple h-4 w-4" />
          </div>
          <h2 className="text-lg font-medium">Heart Rate Signs</h2>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Live ECG</span>
        </div>
      </div>
      
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ecgData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="time" tick={false} stroke="rgba(255,255,255,0.2)" />
            <YAxis domain={[-20, 110]} hide />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(26, 31, 44, 0.8)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
              formatter={(value) => [`${value}mV`, 'Amplitude']}
              labelFormatter={(value) => `Time: ${value*0.04}s`}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#9b87f5" 
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
              animationDuration={1000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="text-center p-2 bg-muted/20 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">Heart Rate</p>
          <p className="text-sm font-medium text-dashboard-pink">75 BPM</p>
        </div>
        
        <div className="text-center p-2 bg-muted/20 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">QRS Duration</p>
          <p className="text-sm font-medium text-dashboard-blue">0.09s</p>
        </div>
        
        <div className="text-center p-2 bg-muted/20 rounded-lg">
          <p className="text-xs text-muted-foreground mb-1">QT Interval</p>
          <p className="text-sm font-medium text-dashboard-purple">0.41s</p>
        </div>
      </div>
    </div>
  );
};

export default HeartRateGraph;
