

const Banner = ({title, subTitle, height}: {title: string, subTitle: string, height:string}) => {

  const style = {
    height: height
  }

    return (
        <div style={style} className="w-screen flex flex-col justify-center items-center font-Sedgwick mb-5">
          <h1 className="text-center font-bold text-4xl text-zinc-100">{title}</h1>
          <h2 className="text-center font-bold text-2xl mt-4 text-zinc-100	">{subTitle}</h2>
        </div>
    )
}

export default Banner;