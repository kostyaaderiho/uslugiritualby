'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { MenuItem } from './types';
import styles from './Nav.module.css';

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

export const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.menu}>
            {MenuItems.map(({ href, text }) => (
                <Link
                    href={href}
                    key={`${href}_${text}`}
                    className={clsx(styles.menuItem, {
                        [styles['menuItem--active']]: pathname === href,
                    })}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};
