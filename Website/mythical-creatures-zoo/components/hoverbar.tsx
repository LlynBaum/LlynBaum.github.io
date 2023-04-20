import { StaticImageData } from "next/image";

interface HoverBarProp{
    category: string
    img: StaticImageData
    bgPos: React.CSSProperties
}

const HoverBar = ({HoverBarProp, styles} : {HoverBarProp: HoverBarProp, styles: string}) => {

    const {category, img, bgPos} = HoverBarProp;

    const imgUrl = `url(${img.src})`;

    const backroundStyle = {
        backgroundImage: imgUrl
    }

    const style = {...bgPos, ...backroundStyle}

    return(
        <div style={style} className={"flex justify-center items-center bg-cover " + styles}>
            <h2 className="font-Sedgwick text-6xl">{category}</h2>
        </div>
    )
}

export default HoverBar;