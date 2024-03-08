import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-loading-skeleton/dist/skeleton.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { CenterBlock } from './ui/CenterBlock';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
import { ScrollToTopButton } from './ui/ScrollToTopButton';

import './globals.css';

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
            <div className="flex flex-col h-full">
                <Header />
                <main className="flex-1 py-8">
                    <CenterBlock>{children}</CenterBlock>
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </body>
    </html>
);

export default RootLayout;
