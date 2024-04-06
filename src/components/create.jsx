import React, { useState } from 'react';
import { Image } from "./image";

export default function Create(props) {
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleButtonClick = (buttonId, imageId) => {
        setSelectedButton(buttonId);
        setSelectedImage(imageId);
    };

    const buttonStyle = {
        padding: '10px',
        margin: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        color: '#333',
    };

    const selectedButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#007bff',
        color: '#fff',
    };

    // Gallery data
    const galleryData = [
        {
            title: "Craft",
            largeImage: "img/create/hover/craft.webp",
            smallImage: "img/create/hover/craft.webp"
        },
        {
            title: "Crayon Art",
            largeImage: "img/create/hover/crayon.jpg",
            smallImage: "img/create/hover/crayon.jpg"
        },
        {
            title: "Sketching",
            largeImage: "img/create/hover/sketching.jpg",
            smallImage: "img/create/hover/sketching.jpg"
        },
    ];

    return (
        <div>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-text">
                            <h2 className="text-center with-pseudo-element">Create</h2>
                            <br />
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <h2 style={{ fontSize: "2.5rem" }}>Difficulty level:</h2>
                                    <span className="App">
                                    <button
                                        style={selectedButton === 'button1' ? selectedButtonStyle : buttonStyle}
                                        id="button1"
                                        onClick={() => handleButtonClick('button1')}
                                    >
                                        Easy
                                    </button>
                                    <br />
                                    <button
                                        style={selectedButton === 'button2' ? selectedButtonStyle : buttonStyle}
                                        id="button2"
                                        onClick={() => handleButtonClick('button2')}
                                    >
                                        Moderate
                                    </button>
                                    <br />
                                    <button
                                        style={selectedButton === 'button3' ? selectedButtonStyle : buttonStyle}
                                        id="button3"
                                        onClick={() => handleButtonClick('button3')}
                                    >
                                        Advanced
                                    </button>
                                    </span>
                                    <br /><br />
                                    <h2 style={{ fontSize: "2.5rem" }}>Filter By:</h2>
                                    <span className="App">
                                    <button
                                            style={selectedButton === 'button4' ? selectedButtonStyle : buttonStyle}
                                            id="button4"
                                            onClick={() => handleButtonClick('button4', 'crayonArt')}
                                        >
                                            Crayon Art
                                        </button>
                                        <br />
                                        <button
                                            style={selectedButton === 'button5' ? selectedButtonStyle : buttonStyle}
                                            id="button5"
                                            onClick={() => handleButtonClick('button5', 'sketching')}
                                        >
                                            Sketching
                                        </button>
                                        <br />
                                        <button
                                            style={selectedButton === 'button6' ? selectedButtonStyle : buttonStyle}
                                            id="button6"
                                            onClick={() => handleButtonClick('button6', 'craft')}
                                        >
                                            Craft
                                        </button>
                                        <br />
                                        <button
                                            style={selectedButton === 'button7' ? selectedButtonStyle : buttonStyle}
                                            id="button7"
                                            onClick={() => handleButtonClick('button7', 'abstractArt')}
                                        >
                                            Abstract Art
                                        </button>
                                        <br />
                                        <button
                                            style={selectedButton === 'button8' ? selectedButtonStyle : buttonStyle}
                                            id="button8"
                                            onClick={() => handleButtonClick('button8', 'mandalaArt')}
                                        >
                                            Mandala Art
                                        </button>
                                        {/* Other filter buttons */}
                                    </span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    {/* Display selected image */}
                                    {selectedImage && (
                                        <div>
                                            {selectedImage === 'crayonArt' && <img src="./img/create/crayon.webp" alt="Crayon Art" />}
                                            {selectedImage === 'sketching' && <img src="./img/create/sketching.jpg" alt="Sketching" />}
                                            {selectedImage === 'craft' && <img src="./img/create/craft.jpg" alt="Craft" />}
                                            {selectedImage === 'abstractArt' && <img src="./img/create/abstract.jpg" alt="Abstract Art" />}
                                            {selectedImage === 'mandalaArt' && <img src="./img/create/mandala.jpg" alt="Mandala Art" />}
                                            {/* Render other images based on selectedImage value */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Render Gallery component with the galleryData */}
            <Gallery data={galleryData} />
        </div>
    );
}

// Gallery component
export function Gallery(props) {
    return (
        <div id="portfolio" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <p>
                        The art gallery that inspires everyone
                    </p>
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {props.data
                            ? props.data.map((d, i) => (
                                <div
                                    key={`${d.title}-${i}`}
                                    className="col-sm-6 col-md-4 col-lg-4"
                                >
                                    <Image
                                        title={d.title}
                                        largeImage={d.largeImage}
                                        smallImage={d.smallImage}
                                    />
                                </div>
                            ))
                            : "Loading..."}
                    </div>
                </div>
            </div>
        </div>
    );
}
