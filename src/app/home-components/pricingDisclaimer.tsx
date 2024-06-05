import Link from "next/link";

export const PricingDisclaimerSection = () => {
    return (

        <div className='flex flex-col space-y-3'>
            <h3 className='text-xl font-bold'>Payment Options</h3>

            <div className='grid grid-cols-1 gap-overflow-auto'>

                <div className='rounded-lg border bg-white p-4 flex-col space-y-2'>

                    <p>Hinkapin Health offers several payment options for your convenience.</p>

                    <ul className="flex flex-col md:flex-row md:justify-between font-bold">
                        <p>Cash</p>
                        <Link target="_blank" className='hover:underline ' href='https://www.carecredit.com/howcarecreditworks/prospective/'>Care Credit (Third party provider)</Link>
                        <p>Money Orders</p>
                        <p>Credit / Debit Cards</p>
                    </ul>

                    <p className='font-light text-xs'>
                        A 3.5% fee will be added to all card payments for our bundled flat-rate surgery program. This fee applies to patients who pay for their procedures themselves, without using insurance. If you choose to pay with a card, the additional 3.5% fee will be added to your final payment amount.
                        For example, if your total bill is $100, you would pay $103.50 if using a credit or debit card. We apologize for any inconvenience this may cause. We appreciate your understanding and continued patronage.
                    </p>
                    <p className='font-light text-xs'>
                        This fee applies to all credit card transactions, including Visa, Mastercard, American Express, and Discover. The fee is non-refundable. We are unable to waive the fee.
                    </p>
                    <p className='font-light text-xs'>
                        * Cash Rate Pricing is not applicable when using Insurance plans – Private or Medicare.
                    </p>

                </div>

            </div>
        </div>
    )
}

export default PricingDisclaimerSection;



