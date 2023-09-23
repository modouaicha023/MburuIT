import Container from '@/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AlignJustify, Moon, Sun } from 'lucide-react';
import logo from '/public/next.svg'
import ProfileButton from './ui/profile-button';
const routes = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/',
        label: 'About',
    },
    {
        href: '/',
        label: 'Projects',
    },
    {
        href: '/',
        label: 'Skills',
    },

    {
        href: '/',
        label: 'Contact',
    },
];
export default function Header() {
    return (
        <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full" >
                    <div className="flex items-center">
                        <Image src={logo} width={50} height={50} alt={'Logo'} />
                        <Link href="" className='ml-4 lg:ml-0 px-2'>
                            <h1 className='text-xl font-bold'>
                                CompanieName
                            </h1>
                        </Link>
                    </div>
                    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block'>
                        {routes.map((route, i) => (
                            <Button asChild variant='ghost'>
                                <Link
                                    key={i}
                                    href={route.href}
                                    className="text-sm font-medium transition-colors">
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className='flex items-center'>
                        <Button
                            variant={'ghost'}
                            size={'icon'}
                            className='mr-2'
                            aria-label='Menu'>
                            <span className='sr-only'>Menu</span>
                            <AlignJustify className='h-6 w-6' />
                        </Button>
                        <Button
                            variant={'ghost'}
                            size={'icon'}
                            className='mr-2'
                            aria-label='Toogle Theme'>
                            <Sun className='h-6 w-6 rotate-0 scale-100  transition-all dark:rotate-90 dark:scale-0' />
                            <Moon className='absolute h-6 w-6 rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100' />
                            <span className='sr-only'>Shopping Cart</span>
                        </Button>
                        <ProfileButton/>
                    </div>
                </div>
            </Container>
        </header>
    )
}