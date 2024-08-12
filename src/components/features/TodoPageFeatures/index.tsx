'use client';

import { Container, Flex, Loader, rem, TextInput } from '@mantine/core';
import { parseAsString, useQueryState } from 'nuqs';
import { useEffect, useMemo, useState } from 'react';

import { useGetTodos } from '@/services/todos/query/useGetTodos';

import TodoCard from './sections/TodoCard';

const TodoPageFeatures: React.FC = () => {
  const { data, isLoading } = useGetTodos({
    params_limit: 40,
  });
  const [search, setSearh] = useQueryState(
    'search',
    parseAsString.withDefault(''),
  );
  const [deletedTodo, setDeletedTodo] = useState({
    id: 0,
    title: '',
  });
  const [_, setCheckedId] = useState<number>(0);
  const [deletedArr, setDeletedArr] = useState<number[]>([]);
  const [checkedArr, setCheckedArr] = useState<number[]>([]);

  const todos = useMemo(() => {
    const filteredTodos = data
      ?.filter((v) => v.title.match(search))
      .filter((v) => !deletedArr.includes(v.id))
      .map((v) => ({
        ...v,
        completed: checkedArr.includes(v.id),
      }));
    return filteredTodos;
  }, [data, search, deletedArr, checkedArr]);

  useEffect(() => {
    if (deletedTodo.id) {
      setDeletedArr((prev) => [...prev, deletedTodo.id]);
    }
  }, [deletedArr, deletedTodo]);

  useEffect(() => {
    if (data) {
      const res = data.filter(v => v.completed).map(v => v.id);
      setCheckedArr(res);
    }
  }, [data]);

  return (
    <Container py="md" w={rem(700)}>
      <Flex direction="column" gap="sm">
        <TextInput
          value={search}
          onChange={(v) => setSearh(v.target.value)}
          radius="md"
        />

        {isLoading ? (
          <Loader size="lg" />
        ) : (
          <>
            {todos?.map((v) => (
              <TodoCard
                checkedArr={checkedArr}
                setCheckedArr={setCheckedArr}
                setDeletedTodo={setDeletedTodo}
                key={v.id}
                {...v}
              />
            ))}
          </>
        )}
      </Flex>
    </Container>
  );
};

export default TodoPageFeatures;
