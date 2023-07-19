import Image from 'next/image'
import { FC } from 'react'

interface HeaderAbdullahProps {
  
}









const Header: FC<HeaderAbdullahProps> = ({}) => {
  return <div className="w-full container h-[90px] flex gap-x-4 items-center bg-white p-4">
       <div className='flex w-[100px] items-center flex-col justify-center '>
           <Image src="/assets/logo.jpg" alt="logo" width={200} height={200} />
       </div>
       <div className='w-[800px] mx-8 flex items-center gap-x-4'>
          <p className='text-lg font-semibold text-gray-700 cursor-pointer'>Notre histoire</p>
          <p className='text-lg font-semibold text-gray-700 cursor-pointer'>Philosophie</p>
          <p className='text-lg font-semibold text-gray-700 cursor-pointer' >Ressources</p>
          <p className='text-lg font-semibold text-gray-700 cursor-pointer'  >Étude de cas gratuite</p>
          <p className='text-lg font-semibold text-gray-700 cursor-pointer' >Commentaires</p>
       </div>
  </div>
}

export default Header