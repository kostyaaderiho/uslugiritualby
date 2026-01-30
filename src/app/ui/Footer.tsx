import { getCompanyInfo } from '@/app/api/contentful';
import { isResponseError } from '@/app/types';

import { CenterBlock } from './CenterBlock';
import { Typography } from './theme/Typography';
import { ContactPhone } from './ContactPhone';

export const Footer = async () => {
    const response = await getCompanyInfo();

    return (
        <footer className="border-t-2 border-y-slate-200">
            <CenterBlock>
                <div className="flex py-8 justify-between flex-col text-center lg:flex-row lg:text-left text-slate-600">
                    <div className="lg:w-80">
                        {isResponseError(response) ? undefined : (
                            <Typography sizeType={'microcopy'} fontType="light">
                                {response?.items[0].fields.text}
                            </Typography>
                        )}
                    </div>
                    <div className="my-8 lg:my-0 lg:w-80">
                        <Typography sizeType={'body2'} fontType="light">
                            Время работы: 24/7 <br />
                            Самовывоз: г. Могилев, ул. Ушакова 8 <br />
                            <ContactPhone
                                phones={[
                                    {
                                        tel: 'tel:+375295401919',
                                        ui: '+375 (29) 540-19-19',
                                    },
                                    {
                                        tel: 'tel:+375292151717',
                                        ui: '+375 (29) 215-17-17',
                                    },
                                ]}
                            />
                        </Typography>
                    </div>
                </div>
            </CenterBlock>
        </footer>
    );
};
