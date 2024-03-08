import { Link } from './Link';
import { Typography } from './theme';

export default function NotFound({ href }: { href: string }) {
    return (
        <main className="flex w-full h-full justify-center flex-col gap-4 items-center">
            <Typography fontType="bold" sizeType="headline4">
                404 Not Found
            </Typography>
            <Typography fontType="light" sizeType="body2">
                Could not find the requested page.
            </Typography>
            <Link href={href}>Go Back</Link>
        </main>
    );
}
