import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export const ProcedureDisclaimer = () => {

    return (
        <div>
             <Accordion expanded>
                    <AccordionSummary className='text-md font-bold'>Disclaimer</AccordionSummary>
                    <AccordionDetails>


                        <div className='flex flex-col space-y-2'>

                            <div>
                                <p>Price Includes:</p>
                                <ul className="list-inside list-disc">
                                    <li>Pre-Operative Consulation</li>
                                    <li>Surgeon</li>
                                    <li>Anesthesia</li>
                                    <li>Pathology*</li>
                                    <li>All medications and supplies for surgery</li>
                                </ul>
                            </div>


                            <div>
                                <p className='pt-2'>Price Excludes:</p>
                                <ul className="list-inside list-disc">
                                    <li>Transportation</li>
                                    <li>Pre-Operative Imaging - CT, MRI, etc</li>
                                    <li>Diagnostic Labs</li>
                                    <li>Management of Complications</li>
                                    <li>Postoperative Medications</li>
                                    <li>Additional Specialist Consultation if needed</li>
                                </ul>
                            </div>

                            <p className='font-light text-xs'>
                                *May vary on a case-by-case basis, as determined by the surgeon at the time of consultation.
                            </p>

                            <p className='font-light text-xs'>
                                *If an overnight stay is required, an additional fee will be incurred.
                            </p>
                            <p className='font-light text-xs'>
                                *We do not accept public or private insurance plans for self-pay patients
                            </p>
                            <p className='font-light text-xs'>
                                Note: Cash prices apply to patients who pay the entire fee in advance, and will likely not count toward an insurance deductible. If you choose to have a claim filed, either for private insurance or government insurance (Medicare, Medicaid, etc.), the quoted cash rate does not apply to you. The cash prices offered are possible because advance payment eliminates 1) the expense of processing claims and 2) the risk of non-payment of fees. Prices include applicable facility, physician, and anesthesia fees. Additional fees may be charged for complication or comorbidity.
                            </p>
                        </div>



                    </AccordionDetails>
                </Accordion>
               
        </div>
    )
}

export default ProcedureDisclaimer;