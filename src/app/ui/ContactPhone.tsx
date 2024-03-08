import { Typography, TypographyProps } from './theme/Typography';

import styles from './ContactPhone.module.css';

export type ContactPhoneProps = {
    children: React.ReactNode;
} & Partial<TypographyProps>;

export const ContactPhone = ({
    children,
    ...rest
}: ContactPhoneProps): JSX.Element => (
    <Typography
        sizeType="body1"
        fontType="bold"
        tagType="p"
        className={styles.phone}
        {...rest}
    >
        <a href="tel:+375295401919">{children}</a>
    </Typography>
);
