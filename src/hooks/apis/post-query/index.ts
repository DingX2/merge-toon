import { useQuery } from '@tanstack/react-query';
import { QUERY_OPTIONS } from '@/constants';
import { PostRepository } from './repository';

const queryKey = {
    all: ['post'],
};

export const useGetPost = () => {
    return useQuery({
        queryKey: queryKey.all,
        queryFn: () => PostRepository.getPost(),
        ...QUERY_OPTIONS,
    });
};
