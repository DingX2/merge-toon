import type { FC, PropsWithChildren } from 'react';
import { Button } from '@/components/atoms';

interface Props extends PropsWithChildren {
    color: string;
}

export const ButtonGroup: FC<Props> = ({ children, color }) => {
    return (
        <>
            <Button color={color}>{children}</Button>
            <Button color={color}>{children}</Button>
        </>
    );
};
