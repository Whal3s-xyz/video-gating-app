import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Whal3sLogoWhite from '@/images/logos/whal3s_white.png'
import Whal3sLogoBlack from '@/images/logos/whal3s_black.png'
import Image from "next/image";
import Link from 'next/link'


// @ts-ignore
const navigation = [
    // { name: 'Product', href: '#' },
    // { name: 'Features', href: '#' },
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
]
const Navbar = ({allBlack = false}) => {

    return (
        <header className={`absolute inset-x-0 top-0 z-50 ${allBlack? 'bg-[#f0f6ff]' : 'lg:bg-[#f0f6ff]'} `}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href={'/'} className="-m-1.5 p-1.5">
                        <span className="sr-only">Whal3s</span>
                        <Image src={Whal3sLogoBlack} alt={'Whal3s Logo'} className={`${allBlack ? '' : 'hidden lg:block'}  h-8 w-auto`}/>
                        <Image src={Whal3sLogoWhite} alt={'Whal3s Logo'} className={`${allBlack ? 'hidden' : 'lg:hidden'}  h-8 w-auto`}/>
                    </Link>

                </div>
                <div className="flex flex-1 justify-end">
                    <a href="https://whal3s.xyz" className={`text-sm font-semibold leading-6 ${allBlack ? 'text-gray-900' : 'text-white lg:text-gray-900'} `}>
                        See more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
