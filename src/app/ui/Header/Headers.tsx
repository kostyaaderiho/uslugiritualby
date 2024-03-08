import { ContactPhone } from '../ContactPhone';
import { Typography } from '../theme/Typography/Typography';
import { CenterBlock } from '../CenterBlock/CenterBlock';
import styles from './Header.module.css';
import { Nav } from './Nav';

export const Header = () => (
    <header className={styles.header}>
        <CenterBlock>
            <div className={styles.inner}>
                <Nav />
                <div className={styles.contacts}>
                    <Typography sizeType="body2" fontType="light" tagType="p">
                        Время работы: 24/7
                    </Typography>
                    <Typography sizeType="body2" fontType="light" tagType="p">
                        Самовывоз: г. Могилев, ул. Ушакова 8
                    </Typography>
                    <ContactPhone>+375 (29) 540-19-19</ContactPhone>
                </div>
            </div>
        </CenterBlock>
    </header>
);
