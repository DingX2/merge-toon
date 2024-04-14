import type { FC } from 'react';
import { Skeleton, Stack } from '@mui/material';
import { AppTemplate } from '@/components/templates';
import { useGetPost } from '@/hooks/apis';

interface Props extends FC {
    Loading: FC;
}

export const App: Props = () => {
    const { data } = useGetPost();

    return <AppTemplate posts={data.data} />;
};

const Loading: FC = () => {
    return (
        <Stack direction="column" gap="10px">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => {
                return <Skeleton key={id} variant="rectangular" width="100%" height={87} />;
            })}
        </Stack>
    );
};
App.Loading = Loading;
