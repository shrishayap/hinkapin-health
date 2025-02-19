'use client'
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';

interface ProcedureContactFormProps {
    procedureName: string;
}

export const ProcedureContactForm = ({ procedureName }: ProcedureContactFormProps) => {
    const t = useTranslations('ProcedureContactForm');

    return (
        <div className='flex flex-col space-y-2 rounded-xl'>
            <p className='text-lg font-bold'>{t('title', { procedureName })}</p>
            <p className=''>{t('subtitle')}</p>
            <iframe 
                src='https://forms.zohopublic.com/hinkapinhealth/form/NTTCSurgeryenquiryform1/formperma/X6KGjD7enRG2MadHZa3YtOy0FtS0La_8cihq9g7xZCI' 
                className='rounded-md h-[900px] border'
            />
        </div>
    );
};

export default ProcedureContactForm;