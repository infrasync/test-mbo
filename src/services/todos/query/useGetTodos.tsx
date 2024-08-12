import { useQuery } from '@tanstack/react-query';

export type Todo = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  params_limit: number;
};

export function useGetTodos(props: Props) {
  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${props.params_limit}`,
      );
      return res.json();
    },
  });
}
