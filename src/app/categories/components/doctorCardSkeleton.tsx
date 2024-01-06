import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';
import { Divider } from '@mui/joy';

export default function DoctorCardSkeleton() {
    return (

        <Card
            variant="outlined"
            sx={{
                minWidth: '320px',
                flex: '1 0 0',
                margin: '4px',
            }}
            className='rounded-xl hover:border-blue-500'
        >
            <div className='flex flex-row'>
                <div className='w-1/2'>
                    <Skeleton variant="circular" width={90} height={90} />
                </div>
                <div className='w-1/2 self-center'>
                    <Typography level="title-lg">
                        <Skeleton>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Skeleton>
                    </Typography>
                </div>
            </div>

            <Divider />

            <CardContent>


                <Typography level="title-md">
                    <Skeleton>Lorem Ipsum Lorem Ipsum Lorem</Skeleton>
                </Typography>


                <Typography level="body-sm">
                    <Skeleton>Lorem Ipsum Lorem Ipsum Lorem</Skeleton>
                </Typography>
                <Typography level="body-sm">
                    <Skeleton>Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem</Skeleton>
                </Typography>

                <div className='flex flex-row justify-between'>
                    <Typography level="body-sm">
                        <Skeleton>Lorem Ipsum</Skeleton>
                    </Typography>

                    <Typography level="body-sm">
                        <Skeleton>Lorem Ipsum</Skeleton>
                    </Typography>
                </div>

            </CardContent>

            <Button variant="outlined" color="neutral">
                Learn More
                <Skeleton />
            </Button>

        </Card>
    );
}