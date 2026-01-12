import { useEffect, useRef } from "react";

export default function TimedVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const targetHour = 17;
            const targetMinute = 0;

            if (
                now.getHours() === targetHour &&
                now.getMinutes() === targetMinute
            ) {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }
        };

        const interval = setInterval(checkTime, 1000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div
            style={{
                padding: 0,
                margin: 0,
                backgroundColor: "black",
                overflow: "hidden",
                width: "100vw",
                height: "100vh",
            }}
        >
            <video
                ref={videoRef}
                muted
                loop
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src="./assets/video.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
