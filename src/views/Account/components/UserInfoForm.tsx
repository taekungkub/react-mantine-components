import { Box, Button, Card, Group, TextInput, createStyles, rem } from "@mantine/core";
import MyCard from "../../../components/MyCard";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
}));

function UserInfoForm() {
  const { classes, theme } = useStyles();
  return (
    <Box>
      <TextInput label="Name" placeholder="Name" />
      <TextInput mt="md" label="Email" placeholder="Email" />
      <TextInput mt="md" label="Telephone" placeholder="Telephone" />

      <Box mt={20}>
        <Button>Update</Button>
        <Button variant="subtle">Close</Button>
      </Box>
    </Box>
  );
}

export default UserInfoForm;
