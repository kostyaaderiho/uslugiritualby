import { Typography, TypographyProps } from './theme/Typography';

export type ContactPhoneProps = {
    children: React.ReactNode;
} & Partial<TypographyProps>;

export const ContactPhone = ({
    children,
    ...rest
}: ContactPhoneProps): JSX.Element => (
    <Typography
        className="text-lime-600"
        sizeType="body1"
        fontType="bold"
        tagType="p"
        {...rest}
    >
        <a href="tel:+375295401919">{children}</a>
    </Typography>
);
