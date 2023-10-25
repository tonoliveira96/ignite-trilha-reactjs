
import Button from '@/components/Button';
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react/dist/ssr/index';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../assets/bookwise-logo.png";

export default function Home() {
  return (<div className="grid min-h-screen grid-cols-app">
    <aside className="h-full rounded-xl flex flex-col items-center bg-gradient-to-bl from-green-200 via-gray-800 to-purple-200">
      <Image src={Logo} alt='Logo menu' width={128} className='my-16' />
      <Link href="/#" className='flex  gap-4 text-gray-200 font-regular text-md py-2'>
        <ChartLineUp weight='regular' size={24} />
        Inicio</Link>
      <Link href="/#" className='flex  gap-4 text-gray-200 font-regular text-md py-2'>
        <Binoculars weight='regular' size={24} />
        Explorar
      </Link>
      <Button variant='borderless'>
        Fazer login 
        <SignIn weight='regular' size={24} className='text-green-100'/>
      </Button>
    </aside>
    <main className="px-4 pb-12 pt-8">Home</main>
  </div>);
}