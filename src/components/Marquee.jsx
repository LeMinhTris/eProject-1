import React, { useState, useEffect } from "react";

const Marquee = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [userLocation, setUserLocation] = useState("");

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation(
                `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
            );
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toLocaleString());
        }, 1000);

        getUserLocation();

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: "100%", overflow: "hidden", height: "20px" }}>
            <marquee behavior="scroll" direction="left" scrollamount="5">
                <span>{`Time: ${currentTime} | Location: ${userLocation}`}</span>
            </marquee>
        </div>
    );
};

export default Marquee;
