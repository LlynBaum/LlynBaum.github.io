import HoverBar from "@/components/hoverbar";
import categories from "@/datas/categories";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-banner bg-c-45 w-screen h-80 flex flex-col justify-center items-center font-Sedgwick mb-5">
          <h1 className="text-center font-bold text-4xl text-zinc-100	">Phantastische Tierwelt</h1>
          <h2 className="text-center font-bold text-2xl mt-4 text-zinc-100	">Entdecke die Welt der Mythical Creatures</h2>
        </div>

        <div className="h-128 flex flex-col justify-center items-center gap-y-6">
        {
          categories.map(c => {
            return (
              <HoverBar HoverBarProp={c} styles={"w-3/4 h-1/3"} />
            )
          }
          )
        }
        </div>
      </main>
    </>
  )
}
