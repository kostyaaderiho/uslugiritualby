import { Typography } from './theme/Typography';

export const PageTitle = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <Typography
        fontType="bold"
        sizeType="headline2"
        tagType="h2"
        className="text-slate-600 mb-2"
    >
        {children}
    </Typography>
);
