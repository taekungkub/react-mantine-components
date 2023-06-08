import { Flex, Image } from "@mantine/core"
import { ProductTy } from "../../../../type"

interface Props {
  data: ProductTy | null
}

function ImageFlex({ data }: Props) {
  const Items = data?.images.map((v) => <Image maw={100} height={100} src={v} key={v} fit="contain" bg={"gray.2"} />)
  return (
    <>
      <Flex direction={"row"} wrap={"wrap"} gap={10} mt={12}>
        {Items}
      </Flex>
    </>
  )
}

export default ImageFlex
