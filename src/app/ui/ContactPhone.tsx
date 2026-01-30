import { Typography, TypographyProps } from './theme/Typography';

type Phone = {
    tel: string;
    ui: string;
};

export type ContactPhoneProps = {
    phones: Phone[];
} & Partial<TypographyProps>;

export const ContactPhone = ({
    phones,
    ...rest
}: ContactPhoneProps): JSX.Element => (
    <Typography
        className="text-lime-600"
        sizeType="body1"
        fontType="bold"
        tagType="p"
        {...rest}
    >
        {phones.map(({ tel, ui }, index) => (
            <>
                <a href={tel} key={tel}>
                    {ui}
                </a>
                {index === phones.length - 1 ? '' : ', '}
            </>
        ))}
    </Typography>
);
