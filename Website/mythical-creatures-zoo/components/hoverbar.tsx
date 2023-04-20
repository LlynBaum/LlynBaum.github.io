import { StaticImageData } from "next/image";

interface HoverBarProp{
    category: string
    img: StaticImageData
}

const HoverBar = ({HoverBarProp, styles} : {HoverBarProp: HoverBarProp, styles: string}) => {

    const {category, img} = HoverBarProp;

    const imgUrl = `url(${img.src})`;

    const backroundStyle = {
        backgroundImage: imgUrl
    }

    return(
        <div style={backroundStyle} className={" flex justify-center items-center " + styles}>
            <h2 className="font-Sedgwick">{category}</h2>
        </div>
    )
}

export default HoverBar;