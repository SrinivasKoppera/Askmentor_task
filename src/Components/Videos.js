import React from 'react'
import Header from '../Layouts/Header';
import trailer from '../Images/trailer.mp4'
export default function Videos() {
    return (
        <div>
            <Header />
            <center>
                <h2>I'm Coming from Video Componenet</h2>
                <video width="800" controls>
                    <source src={trailer} type="video/mp4" ></source>
                </video>
            </center>
        </div>
    )
}
