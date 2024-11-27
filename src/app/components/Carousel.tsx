"use client";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';


function brute_images() {
    const brute_images = [
        { src: "./login-background.png", alt: "teste", link: "https://www.google.com" },
        { src: "./background-splash.png", alt: "teste", link: "https://www.youtube.com"},
    ];
    return Promise.resolve(brute_images);
}


function CarouselHome() {
    const [images, setImages] = useState<{ src: string, alt: string, link: string}[]>([]);

    useEffect(() => {
        brute_images().then((data) => setImages(data));
    }, []);

    const imageCarouselTemplate = (image: { src: string, alt: string, link: string}) => {
        return (
            <>
                <a href={image.link}>
                    <img className='w-full' src={image.src} alt={image.alt} style={{ aspectRatio: 21 / 9 }} />
                </a>
            </>
        );
    };

    return (
        <>
            <Carousel value={images} numVisible={1} autoplayInterval={5000} numScroll={1} showIndicators={false} showNavigators={false} className="custom-carousel md:col-8 p-0" circular itemTemplate={imageCarouselTemplate} />
        </>
    )
}

export default CarouselHome;