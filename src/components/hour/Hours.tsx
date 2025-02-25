import React, { useEffect, useState } from "react";
import "./Hours.scss";

export const Hours: React.FC = () => {
    const [ivoryCoastTime, setIvoryCoastTime] = useState<Date>(new Date());
    const [franceTime, setFranceTime] = useState<Date>(new Date());

    // Met à jour les heures toutes les secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setIvoryCoastTime(new Date());
            setFranceTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Formater l'heure et la date selon le fuseau horaire
    const formatTime = (date: Date, timeZone: string) => {
        return date.toLocaleTimeString("en-US", {
            timeZone: timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };

    return (
        <div className="wrapper-time">
            <span className="time-style">
                🇫🇷 PARIS, FR {formatTime(franceTime, "Europe/Paris")}
            </span>
            <span className="time-style">
                🇨🇮 ABIDJAN, CI {formatTime(ivoryCoastTime, "Africa/Abidjan")}
            </span>
        </div>
    );
};


