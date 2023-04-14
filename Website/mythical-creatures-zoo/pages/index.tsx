import HoverBar from "@/components/hoverbar";
import categories from "@/datas/categories.json";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-banner bg-center w-screen h-72 flex flex-col justify-center items-center font-Sedgwick">
          <h1 className="text-center font-bold text-4xl text-zinc-100	">Phantastische Tierwelt</h1>
          <h2 className="text-center font-bold text-2xl mt-4 text-zinc-100	">Entdecke die Welt der Mythical Creatures</h2>
        </div>

        <div className="h-96">
        {
          categories.categories.map(c => 
            <HoverBar HoverBarProp={c}></HoverBar>
          )
        }
        </div>
      </main>
    </>
  )
}
