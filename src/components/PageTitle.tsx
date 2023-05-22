import { Title } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

function PageTitle({ children }: Props) {
  return (
    <div style={{ marginBottom: "5px" }}>
      <Title order={5}>{children}</Title>
    </div>
  );
}

export default PageTitle;
