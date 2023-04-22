import HoverBar from "@/components/hoverbar";
import categories from "@/datas/categories";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <main>
        <Banner />        <div className="w-screen h-fit flex flex-col justify-center items-center">
          <div className="h-96 w-5/6 flex justify-center items-center gap-x-6">
            {
              categories.map(c => {
                return (
                  <HoverBar HoverBarProp={c} styles={"max-w-1/3 max-h-full"} />
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
