import HoverBar from "@/components/hoverbar";
import categories from "@/datas/categories";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <main>
        <Banner title="Phantastische Tierwelt" subTitle="Entdecke die Welt der Mythical Creatures" height="15rem"/>      
        <div className="w-screen h-fit flex flex-col justify-center items-center"> 
          <h2 className="font-bold text-3xl text-zinc-100 mt-10 text-center">Unsere Kategorien von Tieren:</h2>
          <div className="h-96 w-5/6 flex justify-center items-center lg:flex-row flex-col gap-6">
            {
              categories.map(c => {
                  return (
                    <HoverBar key={c.category} HoverBarProp={c} styles={"max-w-1/3 max-h-full"} />
                  )
                }
              )
            }
          </div>
        </div>
      </main>
    </>
  )
}
