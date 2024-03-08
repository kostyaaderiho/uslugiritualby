import { Typography } from './theme/Typography';

import styles from './PageTitle.module.css';

export const PageTitle = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => (
    <Typography
        fontType="bold"
        sizeType="headline2"
        tagType="h2"
        className={styles.container}
    >
        {children}
    </Typography>
);
