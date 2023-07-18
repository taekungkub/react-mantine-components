import { Box, Button, Card, FileInput, Group, TextInput, createStyles, rem } from "@mantine/core";
import MyCard from "../../../components/MyCard";
import { IconUpload } from "@tabler/icons-react";
import { ChangeEvent } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));

function UserInfoForm() {
  const { classes, theme } = useStyles();

  function uploadImage(e: HTMLInputElement) {
    let file = e;

    if (e.size / 1024 > 6024) {
      window.alert("Please upload a file smaller than 6 MB");
      return false;
    }
  }

  return (
    <Box>
      <TextInput label="Name" placeholder="Name" />
      <TextInput mt="md" label="Email" placeholder="Email" />
      <TextInput mt="md" label="Telephone" placeholder="Telephone" />

      <FileInput
        mt={"md"}
        label="Upload Image"
        placeholder="Upload File"
        icon={<IconUpload size={14} />}
        accept="image/png,image/jpeg"
        onChange={(e: any) => uploadImage(e)}
      />
      <Box mt={20}>
        <Button>Update</Button>
        <Button variant="subtle">Close</Button>
      </Box>
    </Box>
  );
}

export default UserInfoForm;
