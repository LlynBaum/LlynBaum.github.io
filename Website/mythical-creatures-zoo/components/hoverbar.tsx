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

    return(
        <div className={"flex justify-center items-center overflow-hidden " + styles}>
            <img src={img.src} style={bgPos} className="object-cover"></img>
        </div>
    )
}

export default HoverBar;