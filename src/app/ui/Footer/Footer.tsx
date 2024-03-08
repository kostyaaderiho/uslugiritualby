import { CenterBlock } from '../CenterBlock/CenterBlock';
import styles from './Footer.module.css';
import { Typography } from '../theme/Typography';
import { ContactPhone } from '../ContactPhone';
import { getCompanyInfo } from '@/app/api/contentful';
import { isResponseError } from '@/app/types';

export const Footer = async () => {
    const response = await getCompanyInfo();

    return (
        <footer className={styles.footer}>
            <CenterBlock>
                <div className={styles.inner}>
                    <div className={styles.info}>
                        {isResponseError(response) ? undefined : (
                            <Typography sizeType={'microcopy'} fontType="light">
                                {response?.items[0].fields.text}
                            </Typography>
                        )}
                    </div>
                    <div className={styles.info}>
                        <Typography sizeType={'body2'} fontType="light">
                            Время работы: 24/7 <br />
                            Самовывоз: г. Могилев, ул. Ушакова 8 <br />
                            <ContactPhone>+375 (29) 540-19-19</ContactPhone>
                        </Typography>
                    </div>
                </div>
            </CenterBlock>
        </footer>
    );
};
