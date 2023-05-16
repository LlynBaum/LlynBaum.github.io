import Link from "next/link";

const Footer = () => {
    return(
        <footer className="h-18 font-sans bg-black/50">
            <div className="flex gap-x-2 ml-3">
                <Link href="/imprint">Impressum</Link>
            </div>
            
            <p className="ml-3"><i>All Informations on this Website are fake and not real</i></p>
        </footer>
    )
}

export default Footer;