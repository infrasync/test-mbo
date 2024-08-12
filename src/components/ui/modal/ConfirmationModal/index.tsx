import { Icon } from '@iconify/react';
import { Alert, Button, Flex, MantineColor, Modal, Title } from '@mantine/core';

interface ConfirmationModalProps {
  title: string;
  alertTitle: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  color: MantineColor;
  opened: boolean;
}

export default function ConfirmationModal({
  title,
  description,
  onConfirm,
  onCancel,
  color,
  opened,
  alertTitle,
}: ConfirmationModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onCancel}
      size="lg"
      radius="md"
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <Flex direction="column" gap="md">
        <Title order={4}>{title}</Title>

        <Alert
          icon={<Icon icon="tabler:alert-circle" />}
          color={color}
          title={alertTitle}
        >
          {description}
        </Alert>
        <Flex direction="row" gap="md" justify="end">
          <Button onClick={onCancel} radius="md" color="orange.4">
            Cancel
          </Button>
          <Button onClick={onConfirm} color={color} radius="md">
            Confirm
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
}
