interface HoverBarProp{
    category: string
    backgroundImgSrc: string
    hoverImgSrc: string
}

const HoverBar = ({HoverBarProp} : {HoverBarProp: HoverBarProp}) => {

    return(
        <div className={"bg-[url(' " + HoverBarProp.backgroundImgSrc + "')]" + " w-screen h-1/3 flex justify-center items-center"}>
            <h2 className="font-Sedgwick">{HoverBarProp.category}</h2>
            <img src={HoverBarProp.hoverImgSrc} className="h-full w-1/5"></img>
        </div>
    )
}

export default HoverBar;