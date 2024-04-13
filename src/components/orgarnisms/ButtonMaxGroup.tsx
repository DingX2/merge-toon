import type { FC, PropsWithChildren } from 'react';
import { ButtonGroup } from '@/components/molecules';

interface Props extends PropsWithChildren {
    color: string;
}

export const ButtonMaxGroup: FC<Props> = ({ children, color }) => {
    return (
        <>
            <ButtonGroup color={color}>{children}</ButtonGroup>
            <ButtonGroup color={color}>{children}</ButtonGroup>
        </>
    );
};
