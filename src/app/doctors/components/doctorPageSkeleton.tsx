
import * as React from 'react';
import Typography from '@mui/joy/Typography';
import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Divider } from '@mui/joy';
import Skeleton from '@mui/joy/Skeleton';


export const DoctorPageSkeleton = () => {

    return (
        <div className='flex flex-row justify-center'>

            <div className='flex flex-col mx-4 md:mx-10 lg:mx-24 max-w-full xl:max-w-[1150px] self-center'>

                <div className='flex flex-row mb-3'>
                    <div className='w-1/2'>
                        <Skeleton variant="circular" width={180} height={180} />
                    </div>
                    <div className='w-1/2 self-center'>
                        <Typography level="title-lg">
                            <Skeleton>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Skeleton>
                        </Typography>
                    </div>
                </div>

                <Divider />

                <div className='flex flex-col mt-3 mb-3'>

                    <Typography level="title-md">
                        <Skeleton>Lorem Ipsum Lorem Ipsum Lorem</Skeleton>
                    </Typography>

                    <Typography level="body-md">
                        <Skeleton>Lorem Ipsum Lorem Ipsum Lorem</Skeleton>
                    </Typography>

                    <Typography level="body-md">
                        <Skeleton>Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem</Skeleton>
                    </Typography>

                    <div className='flex flex-row justify-between'>
                        <Typography level="body-md">
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </Typography>

                        <Typography level="body-md">
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </Typography>
                    </div>

                    <div className='flex flex-row justify-between'>
                        <Typography level="body-md">
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </Typography>
                        <Typography level="body-md">
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </Typography>
                    </div>
                </div>

                <div className='mb-3'>
                    <Typography level="body-md">
                        <Skeleton>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan enim nisi, eu blandit orci luctus a. Mauris rutrum nulla et tellus facilisis hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porttitor massa nec volutpat cursus. Donec sed dictum sem. Aliquam quis justo sed eros imperdiet varius id eget augue. Nullam nunc ipsum, molestie quis mauris in, lacinia ultrices turpis. Nullam vestibulum quam sed mauris varius, a bibendum tortor gravida. Praesent varius ipsum et nisi laoreet, sit amet rutrum lorem aliquam. Nulla facilisi. Nunc sit amet lorem non arcu sollicitudin commodo. Integer vel lectus orci. Nulla egestas iaculis nisi, ut sollicitudin augue pellentesque sit amet. Proin sit amet finibus justo, a fermentum eros. Morbi iaculis felis at tempor dictum.
                        </Skeleton>
                    </Typography>
                </div>

                <Divider />

                <AccordionGroup className='mt-3'>

                    <Accordion>
                        <AccordionSummary>
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </AccordionSummary>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary>
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </AccordionSummary>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <Skeleton>Lorem Ipsum</Skeleton>
                        </AccordionSummary>
                    </Accordion>
                </AccordionGroup>

            </div>
        </div>

    )

}


export default DoctorPageSkeleton;