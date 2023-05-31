import pegasus from '@/public/img/pegasus.png'
import phoenix from '@/public/img/phoenix.png'
import medusa from '@/public/img/medusa.png'
import dragon from '@/public/img/dragon.png'
import mummie from '@/public/img/mummie.png'
import hippogryph from '@/public/img/hippogryph.jpeg'
import { StaticImageData } from 'next/image'

interface AnimalGroup{
    category: string
    animals: Animal[]
}

interface Animal{
    name: string
    description: string
    img: StaticImageData
}

const Animals: AnimalGroup[] = [
    {
        category: "Feuer",
        animals: [
            {
                name: "Phoenix",
                description: "Der Phoenix, ein bemerkenswertes Wesen aus den Mythen und Legenden, verkörpert mit seinem goldenen Federkleid und flammenden Körper die Schönheit und Kraft des Feuers. Durch endlose Zyklen der Verbrennung und Wiedergeburt symbolisiert er Erneuerung und Unsterblichkeit. Mit imposanter Größe und majestätischem Flug berührt sein harmonischer Gesang die Herzen der Glücklichen, die ihn hören. In abgelegenen Orten lebend, erscheint der Phoenix nur zu besonderen Zeiten, um eine Botschaft der Hoffnung und des Aufbruchs zu überbringen. Der Anblick eines lebendigen Phoenix ist ein wahrhaft magisches Erlebnis, das unsere Vorstellungskraft erweitert und zeigt, dass die Grenzen des Möglichen nur von uns selbst gesetzt werden.",
                img: phoenix
            },
            {
                name: "Drache",
                description: "Der majestätische Drache, ein furchteinflößendes Wesen aus den Legenden und Mythen, verkörpert Stärke und Macht. Mit seinem schuppigen Körper, kräftigen Klauen und imposanten Flügeln ist er ein Symbol für Furchtlosigkeit und Weisheit. Als einsame Kreatur, die in abgelegenen Orten lebt, wird der Drache sowohl als Beschützer als auch als Bedrohung betrachtet. Sein Gebrüll erzittert die Erde, während sein Anblick fasziniert und ehrfurchtgebietend ist. Der Drache fordert unsere Vorstellungskraft heraus und zeigt uns, dass es noch viel Geheimnisvolles in unserer Welt zu entdecken gibt.",
                img: dragon
            }
        ]
    },
    {
        category: "Luft",
        animals: [
            {
                name: "Pegasus",
                description: "Pegasus ist ein majestätisches fliegendes Pferd aus der griechischen Mythologie. Mit glänzendem weißen Fell, einem schlanken Körperbau und majestätischen Flügeln verkörpert es die Schönheit und Anmut eines mythologischen Wesens. Pegasus symbolisiert Freiheit und Stärke und dient als Inspirationsquelle für Künstler und Schriftsteller. Nur diejenigen mit reinem Herzen und einem starken Verlangen nach Wissen und Kreativität sollen in der Lage sein, Pegasus zu sehen. Es wird erzählt, dass Pegasus in entlegenen Gebieten fernab der Zivilisation lebt und seine Flügel entfaltet, um majestätisch durch die Lüfte zu schweben. Pegasus ist ein Mythos, der die Vorstellungskraft der Menschen beflügelt und die Hoffnung auf Magie und Wunder in unserer Welt aufrechterhält.",
                img: pegasus
            },
            {
                name: "Hippogryph",
                description: "Der faszinierende Hippogryph, eine Kreatur aus Mythen und Legenden, vereint die Anmut eines Pferdes mit der Kraft und Freiheit eines majestätischen Greifvogels. Sein beeindruckender Körper und eleganter Flug machen ihn zu einem Symbol für Mut und Abenteuerlust. Als Begleiter und Beschützer fasziniert der Hippogryph mit seiner einzigartigen Verbindung von Stärke und Anmut, und sein Anblick weckt den Wunsch nach Entdeckung und Abenteuer.",
                img: hippogryph
            }
        ]
    },
    {
        category: "Monster",
        animals: [
            {
                name: "Medusa",
                description: "Medusa ist eine faszinierende und furchterregende Gestalt der griechischen Mythologie. Ihre wilden, schlangenartigen Haare mit ihrem hypnotischen Blick machen sie zu einer mächtigen und gefährlichen Kreatur. Medusa ist eine Gorgone, deren Anblick jeden in Stein verwandeln kann. Als Symbol für die dunkle Seite der Schönheit und Macht residiert sie in den Tiefen der Unterwelt und verkörpert Angst und Schrecken. Medusa ist ein Mythos, der die Vorstellungskraft anregt und zeigt, dass sogar in der Dunkelheit eine bedrohliche Schönheit existieren kann.",
                img: medusa
            },
            {
                name: "Mummien",
                description: "Mummien sind faszinierende Überreste des Alten Ägypten, die durch ein komplexes Einbalsamierungsverfahren gut erhalten wurden. Sie sind von Bandagen umhüllt und ruhen in prachtvollen Särgen mit kostbaren Beigaben. Als Brücke zwischen dem Diesseits und dem Jenseits verkörpern sie die uralten Rituale und Überzeugungen des ägyptischen Totenkults. Mit ihrer geheimnisvollen Aura werden Mummien mit Flüchen und unheimlichen Legenden in Verbindung gebracht. Die Entdeckung von Mummien hat Wissenschaftler und Archäologen fasziniert, da sie Einblicke in das antike Ägypten und seine Kultur gewähren. Sie sind lebendige Zeugen einer vergangenen Zeit und inspirieren unzählige Geschichten und Mythen. Mummien sind ein beeindruckendes Erbe, das uns daran erinnert, dass die Vergangenheit nie wirklich vergessen wird und unsere Faszination für das Leben und den Tod aufrechterhält.",
                img: mummie
            }
        ]
    }
]

export function GetAnimalsByCategory(category: string) {
    return Animals.find(animal => animal.category === category)
}