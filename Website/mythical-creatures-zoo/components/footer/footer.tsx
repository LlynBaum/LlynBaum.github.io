import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-zinc-600/25 h-18 font-sans">
            <div className="flex gap-x-2">
                <Link href="/imprint">Impressum</Link>
                <p>	&#124;</p>
                <Link href="/privacy-policy">Datenschutz</Link>
            </div>
        </footer>
    )
}

export default Footer;