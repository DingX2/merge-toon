import { type FC, Suspense } from 'react';
import { AppTemplate } from '@/components/templates';

export const App: FC = () => {
    return (
        <Suspense>
            <AppTemplate />
        </Suspense>
    );
};
