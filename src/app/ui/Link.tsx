import NextLink, { LinkProps } from 'next/link';
import clsx from 'clsx';

import { Typography } from './theme/Typography/Typography';

export const Link = ({
    children,
    className,
    ...rest
}: LinkProps & {
    className?: string;
    children: React.ReactNode;
}) => (
    <NextLink
        {...rest}
        className={clsx(
            'bg-lime-600 p-2 text-white rounded-md text-center inline-block hover:underline',
            className
        )}
    >
        <Typography tagType="span" sizeType="body2" fontType="light">
            {children}
        </Typography>
    </NextLink>
);
