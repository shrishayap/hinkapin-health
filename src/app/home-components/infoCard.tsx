import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';



interface InfoCardProps {
    title: string;
    content: string;
    image: string;
    number: number;
}

export const InfoCard = ({ title, content, image, number }: InfoCardProps) => {
    return (
        <Card variant="outlined">
            <CardOverflow>
                <Avatar
                    size="md"
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        borderRadius: '50%',
                        bgcolor: 'black',
                        color: 'white',
                        left: '1rem',
                        top: 0,
                        transform: 'translateY(50%)',
                    }}
                >
                    {number}
                </Avatar>
                <AspectRatio ratio="2">
                    <img
                        src={image}
                        loading="lazy"
                        alt={title}
                    />
                </AspectRatio>

            </CardOverflow>
            <CardContent>
                <Typography level="title-md">
                    {title}
                </Typography>
                <Typography level="body-sm">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoCard;