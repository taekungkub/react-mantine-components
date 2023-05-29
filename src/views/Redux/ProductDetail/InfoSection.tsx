import { ActionIcon, Badge, Box, Button, Flex, Group, Text, Title } from "@mantine/core";
import InputQty from "./InputQty";
import { ProductTy } from "@/type";
import { IconHeart, IconShoppingCart } from "@tabler/icons-react";

interface Props {
  data: ProductTy | null;
}

function InfoSection(props: Props) {
  return (
    <>
      <Box>
        <Badge> {props.data?.brand}</Badge>
        <Text fz={'xl'} fw={600} mt={12} >
          {props.data?.title}
        </Text>

        <Flex align={"center"} mt={12}>
          <Badge color="yellow">-{props.data?.discountPercentage}%</Badge>
          <Text fz={'xl'} >
            ${props.data?.price}
          </Text>

        </Flex>

        <Flex align={"center"} mt={20} gap={10}>
          <Text >Quantity : </Text>
          <InputQty />
        </Flex>

        <Group mt={20}>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <Button radius="md" style={{ flex: 1 }} variant="outline">
            Buy now
          </Button>
          <Button radius="md" style={{ flex: 1 }} leftIcon={<IconShoppingCart />}>
            Add cart
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default InfoSection;
