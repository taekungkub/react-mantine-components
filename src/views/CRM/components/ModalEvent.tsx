import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Grid, TextInput, createStyles, Input, Select, Group, Avatar, Text, Flex, Badge } from "@mantine/core";
import { IMaskInput } from "react-imask";
import React, { forwardRef, useState } from "react";

import { DateInput, DateTimePicker } from "@mantine/dates";

interface Props {
  opened: boolean;
  open: () => void;
  close: () => void;
}

export default function ModalEvent({ opened, open, close }: Props) {
  const useStyles = createStyles((theme) => ({}));
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { classes } = useStyles();

  const data = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Indigo",
      value: "indigo",
    },
    {
      label: "Yellow",
      value: "yellow",
    },
  ];

  interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    image: string;
    label: string;
    value: string;
    description: string;
  }

  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(({ image, label, description, value, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Flex gap={10} wrap={"nowrap"} align={"center"}>
        <Badge variant="filled" color={value}></Badge>
        <Text size="xs" opacity={0.65}>
          {label}
        </Text>
      </Flex>
    </div>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add New Event" centered radius={"md"}>
        <Grid>
          <Grid.Col sm={12}>
            <TextInput label="User Name" />
          </Grid.Col>
          <Grid.Col sm={12}>
            <DateInput value={startDate} onChange={setStartDate} label="Start date" maw={400} mx="auto" />
          </Grid.Col>
          <Grid.Col sm={12}>
            <DateInput value={endDate} onChange={setEndDate} label="End date" mx="auto" />
          </Grid.Col>

          <Grid.Col sm={12}>
            <Select label="Prefered" placeholder="Pick one" itemComponent={SelectItem} data={data} searchable maxDropdownHeight={400} />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Button fullWidth onClick={close}>
              Submit
            </Button>
          </Grid.Col>
        </Grid>
      </Modal>
    </>
  );
}
