import { Typography } from './theme';
import styles from './Error.module.css';

export default function Error({ reset }: { reset: () => void }) {
    return (
        <main className={styles.container}>
            <Typography fontType="bold" sizeType="headline4">
                Что-то пошло не так
            </Typography>
            <Typography fontType="light" sizeType="body2">
                Страница не была получена, попробуйте позже
            </Typography>
            <button onClick={reset} className={styles.resetButton}>
                Обновить
            </button>
        </main>
    );
}
