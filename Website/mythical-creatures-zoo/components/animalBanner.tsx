import { StaticImageData } from "next/image"
import React from "react"

interface Animal{
    name: string
    description: string
    img: StaticImageData
}

const AnimalBanner = ({animal, styles} : {animal: Animal, styles?: React.CSSProperties}) => {

    return (
        <div style={styles} className="flex gap-x-8 font-Sedgwick">
            <img src={animal.img.src} alt={animal.name} className="h-52"/>
            <div>
                <h2 className="text-2xl font-bold">{animal.name}</h2>
                <p>{animal.description}</p>
            </div>
        </div>
    )
}

export default AnimalBanner;