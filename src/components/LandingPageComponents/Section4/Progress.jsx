import React, { useEffect, useState } from "react";
import './section4.css';

export default function Progressbar({ value = 0, description = "" }) {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (percent < value) {
            const timeout = setTimeout(() => {
                setPercent((prevValue) => prevValue + 1);
            }, 100);

            return () => {
                clearTimeout(timeout); // Clear the timeout when the component unmounts
            };
        }
    }, [value, percent]);


    return (
        <>
            <div className="progressbar">
                <div className="progress-label flex justify-between">
                    <p>{description}</p>
                    <p width={percent}>{percent} % </p>
                </div>
                <div className="progressbarfill" style={{ width: `${percent}%` }}> </div>
            </div>
        </>
    );
}
