import { FC } from 'react'
import Image from 'next/image'

interface HeroSectionAbdullahProps {
  
}

const HeroSection: FC<HeroSectionAbdullahProps> = ({}) => {
  return <div className='w-full h-[600px] flex flex-col items-start justify-center '>
            <div className='w-[50%] h-full flex flex-col justify-center items-start p-4  gap-y-4 '>
                    <h1 className='text-5xl font-bold text-gray-900 text-start'>Commencez votre carrière en gestion de projet</h1>
                    <p className='text-xl font-bold text-gray-500 text-start' >rejoignez la nouvelle ère de l'éducation</p>
                     <button className='bg-blue-700 p-4 px-8 text-xl rounded-xl text-white cursor-pointer'>
                          Commencer
                    </button>
            </div>
            <div className='absolute top-0 right-0 '>
                <Image src="/assets/whales.png" alt='@whales' width={850} height={850}/>
            </div>
    </div>
}

export default HeroSection