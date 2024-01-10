import React, { useEffect, useState } from "react";
import './section4.css';
import axios from 'axios'

export default function Progressbar({ value = 0, description = "" }) {
    // const [percent, setPercent] = useState(0);
    const [pointer, setPointer] = useState([]);

    // useEffect(() => {
    //     if (percent < value) {
    //         const timeout = setTimeout(() => {
    //             setPercent((prevValue) => prevValue + 1);
    //         }, 100);

    //         return () => {
    //             clearTimeout(timeout); // Clear the timeout when the component unmounts
    //         };
    //     }
    // }, [value, percent]);

    useEffect(() => {
        axios
            .get('http://142.93.217.22/api/chooseUsPointer/list')
            .then((response) => {

                // console.log("section4 heading", response)
                setPointer(response.data)
            })
            .catch((error) => console.error("Error fetching data", error))
    }, [])


    return (
        <>
            {
                pointer.map((data, index) => (
                    <div className="progressbar" key={index}>
                        <div className="progress-label flex justify-between">
                            <p>{data.pointer}</p>
                            <p width={data.percentage}>{data.percentage} % </p>
                        </div>
                        <div className="progressbarfill" style={{ width: `${data.percentage}%` }}> </div>
                    </div>
                ))
            }
        </>
    );
}
