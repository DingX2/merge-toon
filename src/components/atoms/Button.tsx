import type { FC, PropsWithChildren } from 'react';
import { Button as MuiButton } from '@mui/material';

interface Props extends PropsWithChildren {
    color: string;
}

export const Button: FC<Props> = ({ color, children }) => {
    const style = {
        button: {
            color,
        },
    };

    return <MuiButton sx={style.button}>{children}</MuiButton>;
};
