import { useRouter } from 'next/router'
import Banner from '@/components/banner'
import AnimalBanner from '@/components/animalBanner'
import { GetAnimalsByCategory } from '@/datas/animals'

const Category = () => {
    const router = useRouter()
    const { category } = router.query

    if(typeof category!=='string') {
        return(
            <main></main>
        )
    }

    const animalGroup = GetAnimalsByCategory(category)

    return (
        <main className='text-slate-50 font-Sedgwick'>
            <Banner title='Category' subTitle={category} height='12rem'/>
            {animalGroup?.animals.map(anim => <AnimalBanner animal={anim} styles={{marginTop: "1rem", marginLeft: "2rem"}}/>)}
        </main>
    )
}

export default Category;