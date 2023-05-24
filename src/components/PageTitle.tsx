import { Title, Text } from "@mantine/core"

interface Props {
  pageTitle?: String
  title?: string
  subtitle?: string
}

function PageTitle({ pageTitle, title, subtitle }: Props) {
  function MyTitle() {
    if (pageTitle) {
      return <Title order={4}>{pageTitle}</Title>
    } else if (title) {
      return <Title order={5}>{title}</Title>
    }
  }

  return (
    <div style={{ marginBottom: "5px" }}>
      {MyTitle()}
      <Text fz="sm">{subtitle}</Text>
    </div>
  )
}

export default PageTitle
