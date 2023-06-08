import { Flex, Image } from "@mantine/core"
import { func } from "joi"
import { FetchStatusTy, ProductTy } from "../../../type"
import ImageFlex from "./components/ImageFlex"

interface Props {
  data: ProductTy | null
  loading: FetchStatusTy
}

function ImageSection(props: Props) {
  function imageList() {
    return props.data?.images.map((image, i) => <Image src={image} fit="cover" key={i} />)
  }
  return (
    <>
      {props.loading === "loading" && "loading"}

      {props.loading === "succeeded" && (
        <Flex direction={"column"}>
          <Image src={props.data?.thumbnail} />
          {/* <Flex gap={10} mt={20}>
            {imageList()}
          </Flex> */}
          <ImageFlex data={props.data} />
        </Flex>
      )}
    </>
  )
}

export default ImageSection
