
import React from "react";
import { Car, MapPin, Clock, AlertTriangle } from "lucide-react";

const VehicleIncidentReport = () => {
  // Mock data
  const incidentData = {
    location: "34.0522° N, 118.2437° W",
    time: "2023-06-15 14:22:37",
    vehicleType: "Sedan",
    speedAtImpact: 42,
    severity: "Moderate",
    airbagDeployed: true
  };

  return (
    <div className="bg-card rounded-xl p-5 shadow-neo border border-border/50 animate-fade-in opacity-0 animation-delay-300 animation-fill-mode-forwards">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-dashboard-orange/20 p-1.5 rounded-md">
          <Car className="text-dashboard-orange h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium">Vehicle Incident Report</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-muted/20 rounded-lg flex items-start gap-3">
          <MapPin className="h-4 w-4 text-dashboard-blue mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Location</p>
            <p className="text-sm font-medium">{incidentData.location}</p>
          </div>
        </div>
        
        <div className="p-3 bg-muted/20 rounded-lg flex items-start gap-3">
          <Clock className="h-4 w-4 text-dashboard-purple mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Time</p>
            <p className="text-sm font-medium">{incidentData.time}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/20 rounded-lg p-4 mb-4">
        <h3 className="text-sm font-medium mb-3 flex items-center gap-1.5">
          <AlertTriangle className="h-4 w-4 text-dashboard-orange" />
          Incident Details
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Vehicle Type</p>
            <p className="text-sm font-medium">{incidentData.vehicleType}</p>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-1">Speed at Impact</p>
            <p className="text-sm font-medium">{incidentData.speedAtImpact} mph</p>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-1">Severity</p>
            <p className="text-sm font-medium">{incidentData.severity}</p>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-1">Airbag Deployed</p>
            <p className="text-sm font-medium">{incidentData.airbagDeployed ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-dashboard-orange/10 rounded-lg p-3 border border-dashboard-orange/20">
        <p className="text-sm text-dashboard-orange flex items-center gap-1.5">
          <AlertTriangle className="h-4 w-4" />
          Emergency services have been notified of this incident.
        </p>
      </div>
    </div>
  );
};

export default VehicleIncidentReport;
