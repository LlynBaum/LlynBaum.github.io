import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from 'next/image';

interface HoverBarProp{
    category: string
    img: StaticImageData
    bgPos: React.CSSProperties
}

const HoverBar = ({HoverBarProp, styles} : {HoverBarProp: HoverBarProp, styles: string}) => {

    const {category, img, bgPos} = HoverBarProp;

    const href = `category/${category}`;

    return(
        <Link href={href} className={"flex justify-center items-center overflow-hidden relative group cursor-pointer shadow-xl shadow-gray-500/30 " + styles}>
            <Image src={img.src} style={bgPos} alt="Category Image" className="object-cover group-hover:brightness-50 group-hover:scale-125 transition ease-in-out duration-500" />
            <h2 className="absolute font-Sedgwick text-slate-50 lg:text-6xl text-5xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition ease-in-out duration-500 select-none">{category}</h2>
        </Link>
        
    )
}

export default HoverBar;