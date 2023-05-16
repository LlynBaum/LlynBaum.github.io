const About = () => {
    return(
        <main>
            <div className="flex flex-col">
                <h1 className="text-center font-bold text-4xl text-zinc-100 my-10">About</h1>
                <div className="max-w-1/2 ml-12 text-zinc-100">
                    <address>
                    Phantastische Tierwelt Zoo<br />
                    123 Fantasie Boulevard<br />
                    Zauberland, 54321<br />         
                    </address>
                </div>
                <div className="max-w-3/4 ml-12 text-zinc-100 mt-10">
                    <h2 className="font-bold text-2xl text-zinc-100 mt-10 mb-3">Über uns:</h2>
                    <p className="mb-1">Die Vision des Phantastische Tierwelt Zoos besteht darin, durch die Magie mythischer Kreaturen ein Gefühl von Staunen und Phantasie in unseren Besuchern zu wecken. Unser Ziel ist es, eine Welt zu schaffen, in der die Grenze zwischen Fantasie und Realität verschwimmt und in der Besucher die ehrfurchterregende Majestät von Kreaturen erleben können, die nur in der Welt der Mythen und Legenden existieren.</p>
                    <p className="mb-1">Unser Ziel ist es, eine sichere und bereichernde Umgebung für unsere Tiere zu schaffen, in der sie gedeihen und für die einzigartigen und wundersamen Wesen geschätzt werden, die sie sind. Wir streben danach, führend in der Pflege und Erhaltung mythischer Kreaturen zu sein und arbeiten daran, ihr Überleben für kommende Generationen zu sichern.</p>
                    <p className="mb-1">Bei Phantastische Tierwelt glauben wir, dass wir durch die Förderung von Liebe und Respekt für diese unglaublichen Wesen eine größere Wertschätzung für die Natur als Ganzes fördern können. Unsere Vision besteht darin, ein Gefühl der Verbindung und Verantwortung für den Planeten und seine Bewohner, sowohl real als auch imaginär, zu inspirieren.</p>
                </div>
            </div>
        </main>
    )
}

export default About;