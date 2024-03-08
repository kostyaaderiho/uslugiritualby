import { Link } from './Link/Link';
import { Typography } from './theme';
import styles from './NotFound.module.css';

export default function NotFound({ href }: { href: string }) {
    return (
        <main className={styles.container}>
            <Typography fontType="bold" sizeType="headline4">
                404 Not Found
            </Typography>
            <Typography fontType="light" sizeType="body2">
                Could not find the requested page.
            </Typography>
            <Link href={href} className="">
                Go Back
            </Link>
        </main>
    );
}
