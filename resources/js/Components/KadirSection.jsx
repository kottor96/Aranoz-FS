import React, { useEffect, useState } from 'react'

export default function KadirSection({maxSeconds, startTimestamp, updateInterval}) {
    const [secondsLeft, setSecondsLeft] = useState(() => {
        const now = Math.floor(Date.now() / 1000);
        const elapsed = (now - startTimestamp) % maxSeconds;
        return maxSeconds - elapsed;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(prev => (prev - 1 + maxSeconds) % maxSeconds);
        }, updateInterval);

        return () => clearInterval(interval);
    }, [maxSeconds, updateInterval]);

    const days = Math.floor(secondsLeft / 86400);
    const hours = Math.floor((secondsLeft % 86400) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;
    return (
        <section id='counterKadir'>
            <div className='flex flex-col items-end'>
                <div>
                    <div>
                        <h1 className='text-xxl mb-2'>
                            Weekly Sale on 60% 
                            <br /> 
                            Off All Products
                        </h1>
                    </div>
                    <div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>DAYS</th>
                                        <th>HOURS</th>
                                        <th>MINUTE</th>
                                        <th>SECONDS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{days}</td>
                                        <td>{hours}</td>
                                        <td>{minutes}</td>
                                        <td>{seconds}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p></p>
                        </div>
                        <div id='book' className='flex'>
                            <input type="text" placeholder='Adresse Email'/>
                            <button className='btnStyle'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
