import { useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { PostRepository } from './repository';

const queryKey = {
    all: ['post'],
};

export const useGetPost = () => {
    return useSuspenseQuery({
        queryKey: queryKey.all,
        queryFn: () => PostRepository.getPost(),
        ...QUERY_OPTIONS,
    });
};
