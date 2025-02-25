import React from "react";
import "./StatusType.scss";

// Définition des types de statuts possibles
type StatusType = "available" | "busy" | "unavailable";

// Props du composant
interface StatusIndicatorProps {
  status: StatusType;
}

// Composant principal
export const StatusType: React.FC<StatusIndicatorProps> = ({ status }) => {
  // Texte dynamique pour chaque statut
  const statusText = {
    available: "AVAILABLE",
    busy: "BUSY",
    unavailable: "UNAVAILABLE",
  };

  return (
    <div className="status-wrapper">
      <span className={`status-indicator ${status}`}></span>
      <span className="status-text">{statusText[status]}</span>
    </div>
  );
};
