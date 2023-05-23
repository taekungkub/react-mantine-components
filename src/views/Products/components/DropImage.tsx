import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Box,
  Flex,
  Image,
  SimpleGrid,
  AspectRatio,
  Overlay,
  Button,
  ActionIcon,
  Center,
  createStyles,
  Card,
  Paper,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX, IconTrash, IconEye } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useEffect, useState } from "react";
import { useHover } from "@mantine/hooks";

interface Props {
  handleSetFile:(e:any)=> void
  handleDeleteFile:(index:number)=> void
  isHasImage:boolean
  images:Array<FileWithPath>

}


export default function DropImage({handleSetFile , isHasImage , images , handleDeleteFile}:Props) {
  const theme = useMantineTheme();


  const useStyles = createStyles((theme) => ({
    container: {
      position: "relative",
    },

    overlay: {
      position: "absolute",
      height: "100%",
      width: "100%",
      margin: "0 auto",
      zIndex: 2,
      backgroundColor: "rgba(0,0,0,0.85)",

      "&:hover": {},
    },
  }));

  const { classes, cx } = useStyles();




  const previews = images.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    return (
      <Card key={index} withBorder p={"xs"} className={classes.container}>
   
          <Overlay sx={{ zIndex: 1 }} opacity={0.5}>
            <Center h={"100%"}>
              <Group position="center">
                <ActionIcon color="teal" size="sm">
                  <IconEye />
                </ActionIcon>
                <ActionIcon color="teal" size="sm" onClick={()=> handleDeleteFile(index)}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </Center>
          </Overlay>
          <Image  fit="cover" src={imageUrl} imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }} />
      </Card>
    );
  });

  return (
    <>
      <SimpleGrid cols={isHasImage ? 4 : 1} breakpoints={[{ maxWidth: "sm", cols: 2 }]}>
        {previews}

        <Dropzone
          style={{ display: "grid", alignContent: "center" }}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          onDrop={handleSetFile}
        >
          <Group position="center" spacing={"xl"} style={{ pointerEvents: "none" }} mih={isHasImage ? "5rem" : "20rem"}>
            <Dropzone.Accept>
              <IconUpload size="4.2rem" stroke={1.5} color={theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size="4.2rem" stroke={1.5} color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]} />
            </Dropzone.Reject>

            <Dropzone.Idle>
              <IconPhoto size="4.2rem" stroke={1.5} />
            </Dropzone.Idle>

            <Flex direction={"column"} style={{ textAlign: "center" }}>
              <Text size="sm">{isHasImage ? "Upload" : "Drag images here or click to select files"}</Text>
              <Text size="sm" color="dimmed" mt={7}>
                {isHasImage ? "" : "Attach as many files as you like, each file should not exceed 5mb"}
              </Text>
            </Flex>
          </Group>
        </Dropzone>
      </SimpleGrid>
    </>
  );
}
