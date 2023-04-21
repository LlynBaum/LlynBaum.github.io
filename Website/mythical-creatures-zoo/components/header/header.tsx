import Navbar from "./navbar/navbar";

const Header = () => {
    return(
        <>
            <div className="relative flex justify-center items-center">
                <div className="flex justify-center h-18 w-screen brightness-25 items-center bg-banner bg-c-10" />
                <div className="absolute bg-transparent text-slate-50 font-Sedgwick">
                    <Navbar />
                </div>
            </div>
        </>
    )
}

export default Header;