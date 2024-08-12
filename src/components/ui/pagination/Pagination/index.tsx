'use client';

import { Flex, Pagination as MantinePagination, Text } from '@mantine/core';

interface PaginationProps {
  total: number;
  totalData: number;
  page: number;
  onChange: (page: number) => void;
}

export default function PaginationComponent({
  total,
  totalData,
  page,
  onChange,
}: PaginationProps) {
  return (
    <Flex direction="column" gap="md" align="center">
      <Text fw={500}>
        {total > 0
          ? `Showing ${(page - 1) * 4 + 1} - ${page * 4 > totalData ? totalData : page * 4} of ${totalData} items`
          : 'No data'}
      </Text>
      <MantinePagination
        total={total}
        value={page}
        onChange={onChange}
        size="md"
        radius="md"
      />
    </Flex>
  );
}
