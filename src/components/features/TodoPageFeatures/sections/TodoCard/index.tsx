import { Icon } from '@iconify/react';
import { ActionIcon, Card, Checkbox, Flex, Menu, Text } from '@mantine/core';
import { Dispatch, SetStateAction, useState } from 'react';

import ConfirmationModal from '@/components/ui/modal/ConfirmationModal';

import type { Todo } from '@/services/todos/query/useGetTodos';

type Props = {
  checkedArr: number[];
  setDeletedTodo: Dispatch<
    SetStateAction<{
      id: number;
      title: string;
    }>
  >;
  setCheckedArr: Dispatch<SetStateAction<number[]>>;
} & Todo;

export default function TodoCard(props: Props) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <Card withBorder radius="lg" shadow="xs">
      <Flex direction="row" justify="space-between" align="center" w="100%">
        <Flex direction="row" align="center" gap="xs">
          <Checkbox
            checked={props.checkedArr.includes(props.id)}
            onChange={() => {
              if (props.checkedArr.includes(props.id)) {
                const res = props.checkedArr.filter((v) => v !== props.id);
                props.setCheckedArr(res);
              } else {
                const res = props.checkedArr;
                res.push(props.id);
                props.setCheckedArr(res);
              }
            }}
          />
          <Text size="sm" fw={500}>
            {props?.title}
          </Text>
        </Flex>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <ActionIcon>
              <Icon icon="cil:hamburger-menu" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Flex
                direction="row"
                align="center"
                gap="sm"
                c="red.6"
                onClick={() => {
                  setIsDeleteOpen(true);
                }}
              >
                <Icon icon="tabler:trash" />
                Delete Todo
              </Flex>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
      <ConfirmationModal
        opened={isDeleteOpen}
        title="Are u sure ?"
        alertTitle="Delete todo"
        description="Todo will be deleted"
        onCancel={() => setIsDeleteOpen(false)}
        onConfirm={() => {
          props.setDeletedTodo({
            id: props.id,
            title: props.title,
          });
          setIsDeleteOpen(false);
        }}
        color="red.6"
      />
    </Card>
  );
}
