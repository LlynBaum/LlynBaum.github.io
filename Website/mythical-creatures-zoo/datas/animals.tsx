import pegasus from '@/public/img/pegasus.png'
import phoenix from '@/public/img/phoenix.png'
import medusa from '@/public/img/medusa.png'
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
        category: "Fire",
        animals: [
            {
                name: "Phoenix",
                description: "Phoenix ist ein fogel, der wen er stirped, wird er verbrennen und aus seiner asche wieder auf erstehen.",
                img: phoenix
            },
            {
                name: "Dragon",
                description: "A Dragon ist eine grosse Kreatur die fliegen und feuer spucken kann.",
                img: phoenix
            }
        ]
    },
    {
        category: "Air",
        animals: [
            {
                name: "Pegasus",
                description: "Das Pegasus ist ein Pferd mit flügel",
                img: pegasus
            },
            {
                name: "Hippogryph",
                description: "Eine Kreuzung zwischen einem Pferd und einem Greif.",
                img: pegasus
            }
        ]
    },
    {
        category: "Monsters",
        animals: [
            {
                name: "Medusa",
                description: "Medusa ist ein Gorgon, eine Kreatur mit Schlangen als Haar, deren Blick Menschen in Stein verwandeln könnte.",
                img: medusa
            },
            {
                name: "Mummien",
                description: "Mumien sind menschliche oder tierische Überreste, die durch eine spezielle Art der Konservierung über einen längeren Zeitraum hinweg erhalten geblieben sind.",
                img: medusa
            }
        ]
    }
]

export function GetAnimalsByCategory(category: string) {
    return Animals.find(animal => animal.category === category)
}