'use client'
import { useTranslations } from 'next-intl';

interface GeneralContactFormProps {
    orgName: string;
}

export const GeneralContactForm = ({ orgName }: GeneralContactFormProps) => {
    const t = useTranslations('GeneralContactForm');

    return (
        <div className='flex flex-col space-y-2'>
            <p className='text-lg font-bold'>{t('title', { orgName })}</p>
            <iframe 
                src='https://forms.zohopublic.com/hinkapinhealth/form/NTTCSurgeryenquiryform1/formperma/X6KGjD7enRG2MadHZa3YtOy0FtS0La_8cihq9g7xZCI' 
                className='rounded-md h-[800px] border'
            />
        </div>
    );
};

export default GeneralContactForm;