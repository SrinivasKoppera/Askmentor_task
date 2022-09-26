import React from 'react'
import Header from '../Layouts/Header';
import image1 from '../Images/nodejs.webp'
import image2 from '../Images/react js training banner.webp';
import image3 from '../Images/Angularjs.webp'
export default function Images({ images }) {
    return (
        <div>
            <Header />
            <h2 style={{ textAlign: 'center' }}>I'm Coming from Images Componenet</h2>
            <center>
                <img src={image1} alt='cloudinary' className='imagesStyle'></img>
                <img src={image2} className='imagesStyle'></img>
                <img src={image3} className='imagesStyle'></img>
            </center>
            <center>
                <h1 style={{marginTop:90}}><img src={images} alt="😔Sorry this image from cloudinary but i did not get it"></img></h1>
            </center>
        </div>
    )
}
