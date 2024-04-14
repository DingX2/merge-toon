import { type FC, Suspense } from 'react';
import { AppTemplate } from '@/components/templates';
import { useGetPost } from '@/hooks/apis';

export const App: FC = () => {
    const { data } = useGetPost();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppTemplate />
            {JSON.stringify(data)}
        </Suspense>
    );
};
