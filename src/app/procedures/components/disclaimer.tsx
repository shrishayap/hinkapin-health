'use client'

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { useTranslations } from 'next-intl';

export const ProcedureDisclaimer = () => {
    const t = useTranslations('ProcedureDisclaimer');

    return (
        <div>
            <Accordion expanded>
                <AccordionSummary className='text-md font-bold'>{t('title')}</AccordionSummary>
                <AccordionDetails>
                    <div className='flex flex-col space-y-2'>
                        <div>
                            <p>{t('includes')}</p>
                            <ul className="list-inside list-disc">
                                <li>{t('includesList.consultation')}</li>
                                <li>{t('includesList.surgeon')}</li>
                                <li>{t('includesList.anesthesia')}</li>
                                <li>{t('includesList.pathology')}</li>
                                <li>{t('includesList.supplies')}</li>
                            </ul>
                        </div>

                        <div>
                            <p className='pt-2'>{t('excludes')}</p>
                            <ul className="list-inside list-disc">
                                <li>{t('excludesList.transportation')}</li>
                                <li>{t('excludesList.imaging')}</li>
                                <li>{t('excludesList.labs')}</li>
                                <li>{t('excludesList.complications')}</li>
                                <li>{t('excludesList.postOpMeds')}</li>
                                <li>{t('excludesList.specialistConsult')}</li>
                            </ul>
                        </div>

                        <p className='font-light text-xs'>{t('notes.pathologyNote')}</p>
                        <p className='font-light text-xs'>{t('notes.overnightStay')}</p>
                        <p className='font-light text-xs'>{t('notes.insurance')}</p>
                        <p className='font-light text-xs'>{t('notes.cashPrice')}</p>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ProcedureDisclaimer;