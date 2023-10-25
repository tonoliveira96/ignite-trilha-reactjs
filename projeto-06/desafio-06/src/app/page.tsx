import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/bookwise-logo.png';
export default function RootPage() {
  return (
    <div className="h-full grid grid-cols-2 items-center">
      <div className='h-full flex items-center justify-center rounded-lg backgroundImage-gradient-radial'>
        <Image src={Logo} alt='Logo' />
      </div>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='w-max[372px]'>
          <h1 className='text-gray-100 text-2xl font-bold'>Boas vindas</h1>
          <p className='text-gray-200 text-md font-regular'>Faça seu login ou acesse como visitante</p>
          <Link href="/home" >Home</Link>
          <Button>
            Entrar com Google
          </Button>
          <Button>
            Entrar com GitHub
          </Button>
          <Button>
            Acessar como visitante
          </Button>
        </div>
      </div>
    </div>
  );
}
