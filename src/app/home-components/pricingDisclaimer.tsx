import Link from "next/link";

export const PricingDisclaimerSection = () => {
    return (
        <div className='rounded-xl border p-3 md:p-8 bg-black'>
            <div className='text-white'>
                <h3 className='text-4xl font-medium font-serif mb-6'>Payment Options</h3>

                <div className='space-y-8'>
                    {/* Payment methods */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <p className='font-medium'>Cash</p>
                        </div>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <Link 
                                target="_blank" 
                                className='font-medium hover:text-blue-200 transition-colors' 
                                href='https://www.carecredit.com/howcarecreditworks/prospective/'
                            >
                                Care Credit
                                <span className='block text-sm opacity-75'>
                                    Pay over time
                                </span>
                            </Link>
                        </div>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <p className='font-medium'>Money Orders</p>
                        </div>
                        <div className='bg-white/10 backdrop-blur rounded-lg p-4 text-center'>
                            <p className='font-medium'>Credit & Debit Cards</p>
                        </div>
                    </div>

                    {/* Important Notes */}
                    <div className='space-y-4 bg-white/10 backdrop-blur rounded-lg p-6'>
                        <div className='space-y-4'>
                            <p>
                                When paying by card for our surgery package:
                                <ul className='list-disc ml-6 mt-2 space-y-2'>
                                    <li>There's a 3.5% card processing fee</li>
                                    <li>This only applies to self-pay patients (not using insurance)</li>
                                    <li>For example: A $100 bill becomes $103.50 with card payment</li>
                                </ul>
                            </p>
                            
                            <div className='border-t border-white/20 pt-4'>
                                <p className='font-medium'>
                                    Please Note:
                                </p>
                                <ul className='list-disc ml-6 mt-2 space-y-2'>
                                    <li>Card fee applies to all major credit cards</li>
                                    <li>Card processing fees are non-refundable</li>
                                    <li>Special cash pricing isn't available with insurance or Medicare</li>
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



