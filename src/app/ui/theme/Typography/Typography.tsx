import clsx from 'clsx';

import styles from './Typography.module.css';

export type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'p';

export type SizeType =
    | 'avatarLarge'
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'body1'
    | 'body2'
    | 'microcopy'
    | 'avatarText';

export type FontType = 'light' | 'regular' | 'bold' | 'slab-bold';

export type TypographyProps = {
    tagType?: TagType;
    fontType: FontType;
    sizeType: SizeType;
    children: React.ReactNode;
    className?: string;
};

export const Typography = ({
    tagType = 'div',
    fontType,
    sizeType,
    children,
    className,
}: TypographyProps): JSX.Element => {
    const Tag = tagType;

    return (
        <Tag
            className={clsx(
                className,
                styles[fontType],
                styles[sizeType],
                styles.typography
            )}
        >
            {children}
        </Tag>
    );
};
