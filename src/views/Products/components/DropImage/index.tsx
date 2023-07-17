import { Group, Text, useMantineTheme, Flex, Image, SimpleGrid, ActionIcon, Center, createStyles, Modal, Box, Paper } from "@mantine/core";
import { IconUpload, IconPhoto, IconX, IconTrash, IconEye } from "@tabler/icons-react";
import { Dropzone, FileRejection, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import useToast from "../../../../hooks/useToast";
import "./index.scss";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

interface Props {
  handleSetFileToList: (e: any) => void;
  handleDeleteFile: (index: number) => void;
  isHasImage: boolean;
  images: Array<FileWithPath | String>;
}

export default function DropImage({ handleSetFileToList, isHasImage, images, handleDeleteFile }: Props) {
  const theme = useMantineTheme();
  const toast = useToast();
  const [opened, { open, close }] = useDisclosure(false);

  const [imageModal, setImageModal] = useState("");

  function handleRejectFile(files: FileRejection[]) {
    console.log("reject files", files);
    toast.error("Maximum max 5 file or something has error");
  }

  function handleViewImage(file: String | FileWithPath) {
    let imageUrl = "";
    if (typeof file === "string") imageUrl = file;
    else imageUrl = URL.createObjectURL(file as FileWithPath);

    setImageModal(imageUrl);
    open();
  }

  const previews = images.map((file, index) => {
    let imageUrl = "";
    if (typeof file === "string") imageUrl = file;
    else imageUrl = URL.createObjectURL(file as FileWithPath);

    return (
      <Paper withBorder radius={"sm"} p={"xs"} key={index}>
        <Paper bg={"gray.2"} h={"100%"} display={"flex"} sx={{ alignItems: "center" }} className="boxWrapper">
          <div className="overlay"></div>
          <Box className="boxAction">
            <Center h={"100%"}>
              <Group position="center">
                <ActionIcon color="teal" size="sm" variant="transparent" onClick={() => handleViewImage(file)}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon color="teal" size="sm" variant="transparent" onClick={() => handleDeleteFile(index)}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </Center>
          </Box>
          <Box className="innerBox">
            <Image fit="cover" src={imageUrl} imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }} />
          </Box>
        </Paper>
      </Paper>
    );
  });

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered transitionProps={{ transition: "pop" }}>
        <Image fit="cover" src={imageModal} imageProps={{ onLoad: () => URL.revokeObjectURL(imageModal) }} />
      </Modal>

      <SimpleGrid
        cols={isHasImage ? 4 : 1}
        breakpoints={[
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "sm", cols: 3 },
          { maxWidth: "xs", cols: 2 },
        ]}
      >
        {previews}

        <Dropzone
          onReject={(files) => handleRejectFile(files)}
          maxSize={3 * 1024 ** 2} //5MB
          accept={IMAGE_MIME_TYPE}
          onDrop={handleSetFileToList}
          maxFiles={5}
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
