import pegasus from '@/public/pegasus.png'
import phoenix from '@/public/phoenix.png'
import { StaticImageData } from 'next/image';

interface Data{
    category: string
    img: StaticImageData
}

const categories : Data[] = [{
        "category" : "Air",
        "img" : pegasus
    },
    {
        "category" : "Fire",
        "img" : phoenix
    },
    {
        "category" : "Unheimliche",
        img: phoenix
    }
];

export default categories;