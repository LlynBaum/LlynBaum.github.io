import pegasus from '@/public/img/pegasus.png'
import phoenix from '@/public/img/phoenix.png'
import medusa from '@/public/img/medusa.png'
import dragon from '@/public/img/dragon.png'
import mummie from '@/public/img/mummie.png'
import hippogryph from '@/public/img/hippogryph.jpeg'
import { StaticImageData } from 'next/image'

interface AnimalGroup{
    category: string
    animals: Animal[]
}

interface Animal{
    name: string
    description: string
    img: StaticImageData
}

const Animals: AnimalGroup[] = [
    {
        category: "Feuer",
        animals: [
            {
                name: "Phoenix",
                description: "Phoenix ist ein fogel, der wen er stirped, wird er verbrennen und aus seiner asche wieder auf erstehen.",
                img: phoenix
            },
            {
                name: "Drache",
                description: "A Dragon ist eine grosse Kreatur die fliegen und feuer spucken kann.",
                img: dragon
            }
        ]
    },
    {
        category: "Luft",
        animals: [
            {
                name: "Pegasus",
                description: "Das Pegasus ist ein Pferd mit flügel",
                img: pegasus
            },
            {
                name: "Hippogryph",
                description: "Eine Kreuzung zwischen einem Pferd und einem Greif.",
                img: hippogryph
            }
        ]
    },
    {
        category: "Monster",
        animals: [
            {
                name: "Medusa",
                description: "Medusa ist ein Gorgon, eine Kreatur mit Schlangen als Haar, deren Blick Menschen in Stein verwandeln könnte.",
                img: medusa
            },
            {
                name: "Mummien",
                description: "Mumien sind menschliche oder tierische Überreste, die durch eine spezielle Art der Konservierung über einen längeren Zeitraum hinweg erhalten geblieben sind.",
                img: mummie
            }
        ]
    }
]

export function GetAnimalsByCategory(category: string) {
    return Animals.find(animal => animal.category === category)
}