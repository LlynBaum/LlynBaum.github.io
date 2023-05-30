import Banner from '@/components/banner'
import AnimalBanner from '@/components/animalBanner'
import { GetAnimalsByCategory } from '@/datas/animals'
import { ParsedUrlQuery } from 'querystring';
import type { GetStaticProps, GetStaticPaths, } from 'next'

export const getStaticPaths : GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {category: 'Air'}
            },
            {
                params: {category: 'Fire'}
            },
            {
                params: {category: 'Monsters'}
            }
        ],
        fallback: false
    }
}

type Props = {
    category: string;
}

interface Params extends ParsedUrlQuery {
    category: string,
 }

export const getStaticProps : GetStaticProps<Props, Params> = async (context) => {

    const category = context.params!.category
    return {
        props: { category: category }
    }
}

const Category = ({category} : {category: string}) => {

    if(typeof category!=='string') {
        return(
            <main>
                <h1>Error: invalid category</h1>
            </main>
        )
    }

    const animalGroup = GetAnimalsByCategory(category);

    let isFirst = true

    return (
        <main className='text-slate-50 font-Sedgwick'>
            <Banner title='Kategorie' subTitle={category} height='12rem'/>
            {animalGroup?.animals.map(anim => {
                if(isFirst) {
                    isFirst = false
                    return <AnimalBanner key={anim.name} animal={anim} styles={{marginLeft: "2rem", marginBottom: "3rem"}}/>
                }
                return <AnimalBanner key={anim.name} animal={anim} styles={{marginTop: "2rem", marginLeft: "2rem", marginBottom: "3rem"}}/>
            })}
        </main>
    )
}

export default Category;