import Image from 'next/image';

import ChevronRight from './chevron-right.svg';
import ChevronLeft from './chevron-left.svg';

export const ChevronRightIcon = () => (
    <Image priority src={ChevronRight} alt={''} width={32} height={32} />
);

export const ChevronLeftIcon = () => (
    <Image priority src={ChevronLeft} alt={''} width={32} height={32} />
);
