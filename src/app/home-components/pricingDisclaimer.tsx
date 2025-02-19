'use client'
import Link from "next/link";
import { useTranslations } from 'next-intl';

export const PricingDisclaimerSection = () => {
    const t = useTranslations('PricingDisclaimer');

    return (
        <div className='rounded-xl border p-3 md:p-8 bg-black'>
            <div className='text-white'>
                <h3 className='text-4xl font-medium font-serif mb-6'>{t('title')}</h3>

                <div className='space-y-8'>
                    {/* Payment methods */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <p className='font-medium'>{t('paymentMethods.cash')}</p>
                        </div>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <Link 
                                target="_blank" 
                                className='font-medium hover:text-blue-200 transition-colors' 
                                href='https://www.carecredit.com/howcarecreditworks/prospective/'
                            >
                                {t('paymentMethods.careCredit')}
                                <span className='block text-sm opacity-75'>
                                    {t('paymentMethods.payOverTime')}
                                </span>
                            </Link>
                        </div>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <p className='font-medium'>{t('paymentMethods.moneyOrders')}</p>
                        </div>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <p className='font-medium'>{t('paymentMethods.cards')}</p>
                        </div>
                    </div>

                    {/* Important Notes */}
                    <div className='space-y-4 bg-white/10 backdrop-blur rounded-lg p-6'>
                        <div className='space-y-4'>
                            <div>
                                <p>{t('cardPayment.title')}</p>
                                <ul className='list-disc ml-6 mt-2 space-y-2'>
                                    <li>{t('cardPayment.processingFee')}</li>
                                    <li>{t('cardPayment.selfPay')}</li>
                                    <li>{t('cardPayment.example')}</li>
                                </ul>
                            </div>
                            
                            <div className='border-t border-white/20 pt-4'>
                                <p className='font-medium'>
                                    {t('pleaseNote.title')}
                                </p>
                                <ul className='list-disc ml-6 mt-2 space-y-2'>
                                    <li>{t('pleaseNote.allCards')}</li>
                                    <li>{t('pleaseNote.nonRefundable')}</li>
                                    <li>{t('pleaseNote.cashPricing')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingDisclaimerSection;



