import { Title, Text } from "@mantine/core";

interface Props {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

function PageTitle({ children, title, subtitle }: Props) {
  return (
    <div style={{ marginBottom: "5px" }}>
      <Title order={5}>
        {title} {children}
      </Title>
      <Text fz="sm">{subtitle}</Text>
    </div>
  );
}

export default PageTitle;
