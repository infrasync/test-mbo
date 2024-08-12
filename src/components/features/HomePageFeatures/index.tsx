'use client';

import {
  Container,
  Flex,
  rem,
} from '@mantine/core';

const HomePageFeatures: React.FC = () => (
    <Container py="md" w={rem(700)}>
      <Flex direction="column" gap="xl">
        Halo Dunia
      </Flex>
    </Container>
  );

export default HomePageFeatures;
