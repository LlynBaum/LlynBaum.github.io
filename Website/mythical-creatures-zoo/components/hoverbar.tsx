import { StaticImageData } from "next/image";
import Link from "next/link";

interface HoverBarProp{
    category: string
    img: StaticImageData
    bgPos: React.CSSProperties
    href: string
}

const HoverBar = ({HoverBarProp, styles} : {HoverBarProp: HoverBarProp, styles: string}) => {

    const {category, img, bgPos, href} = HoverBarProp;

    return(
        <Link href={href} className={"flex justify-center items-center overflow-hidden relative group cursor-pointer shadow-xl shadow-gray-500/30 " + styles}>
            <img src={img.src} style={bgPos} className="object-cover group-hover:brightness-50 group-hover:scale-125 transition ease-in-out duration-500"></img>
            <h2 className="absolute font-Sedgwick text-slate-50 text-6xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition ease-in-out duration-500 select-none">{category}</h2>
        </Link>
        
    )
}

export default HoverBar;