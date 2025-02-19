'use client'
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';

interface ContactInfoProps {
    orgName: string;
    email: string;
    phone: string;
    address: string;
}

export const ContactInfo = ({ orgName, email, phone, address }: ContactInfoProps) => {
    const t = useTranslations('ContactInfo');

    return (
        <div className='flex flex-col space-y-3 p-3 md:p-8 rounded-xl border-2 border-black'>
            <p className='text-2xl font-serif font-bold'>{orgName}</p>
            <p>{t('subtitle')}</p>

            <div className='items-center flex space-x-1'>
                <MdOutlineMail className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>{t('email')}</p>
                    <p>{email}</p>
                </div>
            </div>

            <div className='items-center flex space-x-1'>
                <FiPhone className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>{t('phone')}</p>
                    <p>{phone}</p>
                </div>
            </div>

            <div className='items-center flex space-x-1'>
                <IoLocationOutline className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>{t('address')}</p>
                    <p>{address}</p>
                </div>
            </div>

            <div className='items-center flex space-x-1'>
                <IoTimeOutline className='w-6 h-6' />
                <div className='flex flex-col'>
                    <p className='font-bold'>{t('officeHours')}</p>
                    <p>{t('officeHoursValue')}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo