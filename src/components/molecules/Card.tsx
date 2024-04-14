import type { FC } from 'react';
import { Card as MuiCard, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import type { Post } from '@/types';

interface Props extends Post {}

export const Card: FC<Props> = ({ userId, id, title, completed }) => {
    return (
        <MuiCard>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <div>
                    {userId}: {id}
                    {completed}
                </div>
            </CardContent>
        </MuiCard>
    );
};
