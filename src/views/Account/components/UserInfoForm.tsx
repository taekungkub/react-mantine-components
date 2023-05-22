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
    <MyCard>
      <TextInput label="Name" placeholder="Name" />
      <TextInput mt="md" label="Email" placeholder="Email" />
      <Box mt={20}>
        <Group>
          <Button>Submit</Button>
          <Button variant="subtle">Close</Button>
        </Group>
      </Box>
    </MyCard>
  );
}

export default UserInfoForm;
