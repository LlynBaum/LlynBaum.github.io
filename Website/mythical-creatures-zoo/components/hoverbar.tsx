interface HoverBarProp{
    category: string
    backgroundImgSrc: string
    hoverImgSrc: string
}

const HoverBar = ({HoverBarProp} : {HoverBarProp: HoverBarProp}) => {

    return(
        <div className={"bg-[url(' " + HoverBarProp.backgroundImgSrc + "')]" + " w-screen h-1/3"}>
            <h2>{HoverBarProp.category}</h2>
        </div>
    )
}

export default HoverBar;