'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { Bars4Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/solid';

import { Typography } from './theme/Typography/Typography';
import { ContactPhone } from './ContactPhone';
import { CenterBlock } from './CenterBlock';

type MenuItem = {
    href: string;
    text: string;
};

const MenuItems: MenuItem[] = [
    {
        href: '/',
        text: 'Главная',
    },
    {
        href: '/wreaths',
        text: 'Венки',
    },
    {
        href: '/monuments',
        text: 'Памятники',
    },
    {
        href: '/els',
        text: 'Ель',
    },
    {
        href: '/contacts',
        text: 'Контакты',
    },
];

export const DesktopNav = () => {
    const pathname = usePathname();

    return (
        <div className="hidden flex-col lg:flex lg:flex-row lg:justify-between items-center py-4 justify-center gap-8">
            <nav
                className={'flex gap-2 flex-col text-center lg:flex-row w-full'}
            >
                {MenuItems.map(({ href, text }) => (
                    <Link
                        href={href}
                        key={`${href}_${text}`}
                        className={clsx(
                            'p-2 font-light rounded-md border-lime-600 border-2 hover:text-white hover:bg-lime-600',
                            {
                                ['bg-lime-600 text-white']: pathname === href,
                            },
                        )}
                    >
                        {text}
                    </Link>
                ))}
            </nav>
            <div className={'lg:text-left text-center flex-shrink-0'}>
                <Typography sizeType="body2" fontType="light" tagType="p">
                    Время работы: 24/7
                </Typography>
                <Typography sizeType="body2" fontType="light" tagType="p">
                    Самовывоз: г. Могилев, ул. Ушакова 8
                </Typography>
                <ContactPhone
                    phones={[
                        {
                            tel: 'tel:+375295401919',
                            ui: '+375 (29) 540-19-19',
                        },
                        {
                            tel: 'tel:+375292151717',
                            ui: '+375 (29) 215-17-17',
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export const MobileNav = () => {
    const pathname = usePathname();
    const [isOpened, setIsOpened] = useState(false);

    const menuButtonRef = useRef(null);
    const navMenuRef = useRef<HTMLDivElement | null>(null);
    const backdropRef = useRef(null);
    const closeRef = useRef(null);

    const onClose = useCallback(() => setIsOpened(false), []);

    const onOpen = useCallback(() => setIsOpened(true), []);

    return (
        <>
            <div className="lg:hidden flex justify-between py-4">
                <button
                    className="navbar-burger flex items-center"
                    ref={menuButtonRef}
                    onClick={onOpen}
                >
                    <Bars4Icon className="text-slate-600 w-6 h-6" />
                </button>
                <a
                    href="tel:+375295401919"
                    className="flex text-lime-600 items-center gap-4"
                >
                    Позвонить
                    <PhoneIcon className="text-lime-600 w-6 h-6" />
                </a>
            </div>

            <div
                className={clsx('navbar-menu relative z-50', {
                    ['hidden']: !isOpened,
                })}
                ref={navMenuRef}
            >
                <div
                    className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
                    ref={backdropRef}
                    onClick={onClose}
                />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8 justify-end">
                        <button
                            className="navbar-close"
                            ref={closeRef}
                            onClick={onClose}
                        >
                            <XMarkIcon className="text-slate-600 w-8 h-8" />
                        </button>
                    </div>
                    <div>
                        <ul>
                            {MenuItems.map(({ href, text }) => (
                                <li className="mb-1" key={`${href}_${text}`}>
                                    <Link
                                        className={clsx(
                                            'block p-4 text-sm font-semibold rounded',
                                            {
                                                ['bg-lime-600 text-white']:
                                                    pathname === href,
                                            },
                                        )}
                                        href={href}
                                        onClick={onClose}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const scrollListener = () => setIsSticky(Boolean(window.scrollY));

        document.addEventListener('scroll', scrollListener);

        return () => document.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <>
            <header
                className={clsx(
                    'border-b-2 border-y-slate-200 w-full bg-white z-50 top-0 sticky',
                    {
                        ['shadow-md shadow-slate-100']: isSticky,
                    },
                )}
            >
                <CenterBlock>
                    <DesktopNav />
                    <MobileNav />
                </CenterBlock>
            </header>
        </>
    );
};
