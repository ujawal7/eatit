import Link from 'next/link';
// import Image from 'next/image';

// import logo from '@/assets/logo.png'

const Header = () => {
    return (
        <>
            <header className='flex justify-center items-center p-8'>
                <nav className="md:px-[10%]">
                    <ul className="list-none m-0 p-0 flex gap-6 text-lg justify-center">
                    <li className="bg-transparent text-yellow-500 font-bold py-2 px-4 rounded transform transition duration-500 hover:bg-rose-500 hover:text-white hover:border-transparent hover:scale-105">
                            <Link href='/' >Home</Link>
                        </li>
                        <li className="bg-transparent text-yellow-500 font-bold py-2 px-4 rounded transform transition duration-500 hover:bg-rose-500 hover:text-white hover:border-transparent hover:scale-105">
                            <Link href='/about' >About</Link>
                        </li>
                        <li className="bg-transparent text-yellow-500 font-bold py-2 px-4 rounded transform transition duration-500 hover:bg-rose-500 hover:text-white hover:border-transparent hover:scale-105">
                            <Link href='/portfolio' >Portfolio</Link>
                        </li>
                        <li className="bg-transparent text-yellow-500 font-bold py-2 px-4 rounded transform transition duration-500 hover:bg-rose-500 hover:text-white hover:border-transparent hover:scale-105">
                            <Link href='/contact' >Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
