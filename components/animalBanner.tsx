import { StaticImageData } from "next/image"
import React from "react"
import Image from "next/image";

interface Animal{
    name: string
    description: string
    img: StaticImageData
}

const AnimalBanner = ({animal, styles} : {animal: Animal, styles?: React.CSSProperties}) => {

    return (
        <div style={styles} className="grid lg:grid-cols-2 font-Sedgwick mr-0.5">
            <Image src={animal.img.src} alt={animal.name} width={animal.img.width} height={animal.img.height} priority className="h-52 w-fit shadow-xl shadow-gray-500/30 lg:justify-self-center lg:self-center" />
            <div className="mr-6">
                <h2 className="text-2xl font-bold mb-4">{animal.name}</h2>
                <p>{animal.description}</p>
            </div>
        </div>
    )
}

export default AnimalBanner;