import NextLink, { LinkProps } from 'next/link';
import clsx from 'clsx';

import { Typography } from '../theme/Typography/Typography';
import styles from './Link.module.css';

export const Link = ({
    children,
    className,
    ...rest
}: LinkProps & {
    className?: string;
    children: React.ReactNode;
}) => (
    <NextLink {...rest} className={clsx(styles.link, className)}>
        <Typography tagType="span" sizeType="body2" fontType="light">
            {children}
        </Typography>
    </NextLink>
);
