import React, {useEffect, useState} from "react";
import styles from "./analogClock.module.css"
type PropsType = {}
const get2digitString = (num:number) => num < 10? '0' + num : num;
export const Clock: React.FC<PropsType> = (props) => {
    const [time, setTime] = useState(new Date())

    useEffect (() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000); //  обновляем всё время каждую секунду
        return () => clearInterval(intervalId); // очищаем интервал
    }, []);

    const hours = String(time.getHours()).padStart(2,'0');
    const minutes = String(time.getMinutes()).padStart(2,'0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return (
        <div className= {styles.clock} >
            <span>{get2digitString(time.getHours())}</span>
            <span>{get2digitString(time.getMinutes())}</span>
            <span>{get2digitString(time.getSeconds())}</span>

        </div>
    )
}
