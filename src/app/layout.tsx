import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { CenterBlock } from './ui/CenterBlock/CenterBlock';
import { Header } from './ui/Header/Headers';
import { Footer } from './ui/Footer/Footer';
import styles from './page.module.css';

import './normalize.css';
import './globals.css';
import './swiper.css';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '500', '700', '900'],
});

export const metadata: Metadata = {
    title: 'Ритуальные венки, каркасы для венков, искусственная ель в городе Могилев',
    description:
        'Ритуальные венки, каркасы для венков, искусственная ель, город Могилев',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <html lang="en">
        <body className={roboto.className}>
            <div className={styles.app}>
                <Header />
                <main className={styles.main}>
                    <CenterBlock>{children}</CenterBlock>
                </main>
                <Footer />
            </div>
        </body>
    </html>
);

export default RootLayout;
