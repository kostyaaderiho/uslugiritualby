import { Typography } from './theme';

export default function Error({ reset }: { reset: () => void }) {
    return (
        <main
            className={
                'flex w-full h-full justify-center items-center flex-col gap-4'
            }
        >
            <Typography fontType="bold" sizeType="headline4">
                Что-то пошло не так
            </Typography>
            <Typography fontType="light" sizeType="body2">
                Страница не была получена, попробуйте позже
            </Typography>
            <button
                onClick={reset}
                className="p-2 bg-white border-lime-600 border-2 rounded-md font-light"
            >
                Обновить
            </button>
        </main>
    );
}
