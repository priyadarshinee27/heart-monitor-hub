
import React from "react";
import Header from "@/components/Header";
import HeartRateDetail from "@/components/HeartRateDetail";
import AccelerationMonitor from "@/components/AccelerationMonitor";
import HeartRateMonitor from "@/components/HeartRateMonitor";
import VehicleIncidentReport from "@/components/VehicleIncidentReport";
import HeartRateGraph from "@/components/HeartRateGraph";
import VitalSigns from "@/components/VitalSigns";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <Header />
        
        <main>
          <div className="data-grid mb-6">
            <HeartRateMonitor />
            <VitalSigns />
          </div>
          
          <HeartRateDetail />
          
          <div className="data-grid my-6">
            <AccelerationMonitor />
            <VehicleIncidentReport />
          </div>
          
          <HeartRateGraph />
        </main>
        
        <footer className="py-6 text-center text-xs text-muted-foreground">
          <p>Health Monitor Dashboard • Real-time data visualization</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
