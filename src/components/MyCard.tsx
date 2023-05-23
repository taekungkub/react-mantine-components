import { Card, createStyles, rem } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

export default function MyCard({ children }: Props) {
  return (
    <>
      <Card withBorder padding="xl" radius="md">
        {children}
      </Card>
    </>
  );
}
