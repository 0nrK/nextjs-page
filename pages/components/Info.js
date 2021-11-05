import React from 'react';
import Image from "next/image";

const Info = () => {
    return (
        <div className="flex mt-14 justify-center">
            <div className="flex space-x-5">
                <Image
                className="rounded-l"
                src="/pp.jpg"
                alt="person-image"
                height = {220}
                width = {250}
                />
                <div className="space-y-5">

                    <h2
                    className="text-5xl"
                    >John Doe | Software Developer</h2>
                    <p className="text-xl">I am a software developer located in Medellin. My tech stack is down below.</p>
                    
                    <div className="flex mt-7 items-center justify-evenly">
                        <Image 
                        height= {50}
                        width={50}
                        src="/html.svg"
                        alt="react-icon"></Image>
                        <Image 
                        height= {50}
                        width={50}
                        src="/css.svg"
                        alt="react-icon"></Image>
                        <Image 
                        height= {50}
                        width={50}
                        src="/javascript.svg"
                        alt="react-icon"></Image>
                        <Image 
                        height= {50}
                        width={50}
                        src="/reactjs.svg"
                        alt="react-icon"></Image>
                        <Image 
                        height= {50}
                        width={50}
                        src="/firebase.svg"
                        alt="react-icon"></Image>
                        
                    </div>
                </div>
            </div>
            <button>Toggle</button>
        </div>
    )
}

export default Info
