import {TransformWrapper, TransformComponent} from 'react-zoom-pan-pinch'
import mapImg from '@/public/img/map.png';
import {saveAs} from "file-saver";

const Map = () => {
    return (
        <main>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center font-bold text-4xl text-zinc-100 my-10'>Zoo Map</h1>
                <div className='h-fit w-fit border-2 border-neutral-600 bg-black'>
                    <TransformWrapper>
                        <TransformComponent>
                            <img src={mapImg.src} className='lg:h-128 md:h-80 h-56 w-fit border-4 border-lime-100' />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
                <button className='mt-10 text-center bg-zinc-50 text-black p-2.5 rounded-lg' onClick={SaveMap}>Donwload Map</button>
                <p></p>
            </div>
        </main>
    )
}

export default Map;

function SaveMap() {
    const url = mapImg.src;
    saveAs(url, 'ZooMap');
}