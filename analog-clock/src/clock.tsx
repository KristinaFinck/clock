import React, { useEffect, useState } from "react";
import styles from "./analogClock.module.css";

const ClockHand: React.FC<{ rotation: number; className: string }> = ({ rotation, className }) => {
    return (
        <div
            className={`${styles.hand} ${className}`}
            style={{ transform: `rotate(${rotation}deg)` }}
        ></div>
    );
};

export const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDegrees = (seconds / 60) * 360 + 90;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    return (
        <div className={styles.clock}>
            <div className={styles.outerClockFace}>

                {/* Метки на циферблате */}
                <div className={styles.marking}></div>
                <div className={`${styles.marking} ${styles.markingOne}`}></div>
                <div className={`${styles.marking} ${styles.markingTwo}`}></div>
                <div className={`${styles.marking} ${styles.markingThree}`}></div>
                <div className={`${styles.marking} ${styles.markingFour}`}></div>
                <div className={`${styles.marking} ${styles.markingFive}`}></div>
                <div className={`${styles.marking} ${styles.markingSix}`}></div>


                <div className={styles.innerClockFace}>
                    <ClockHand className={styles.hourHand} rotation={hourDegrees} />
                    <ClockHand className={styles.minuteHand} rotation={minuteDegrees} />
                    <ClockHand className={styles.secondHand} rotation={secondDegrees} />
            </div>
            </div>
        </div>
    );
};
