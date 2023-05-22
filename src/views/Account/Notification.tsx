import { Box, Button, Divider, Grid, Group, Text, createStyles } from "@mantine/core";
import { IconApple, IconApps, IconBrowser, IconDeviceMobile, IconMail, IconPhone, IconRecordMail } from "@tabler/icons-react";
import PageTitle from "../../components/PageTitle";

function NotificationPage() {
  const useStyles = createStyles((theme) => ({
    buttonActive: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[2],
      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.colors.gray[2],
      },
    },
  }));

  const { classes, cx } = useStyles();

  const mockData = [
    {
      id: 2,
      title: "News",
      toggleList: [
        {
          id: 1,
          icon: <IconMail />,
          label: "Email",
          active: true,
        },
        {
          id: 2,

          icon: <IconBrowser />,

          label: "Browser",
          active: false,
        },
        {
          id: 3,

          icon: <IconDeviceMobile />,

          label: "Apps",
          active: false,
        },
      ],
    },
    {
      id: 123,
      title: "Account activity",
      toggleList: [
        {
          id: 1,

          icon: <IconMail />,
          label: "Email",
          active: true,
        },
        {
          id: 2,

          icon: <IconBrowser />,

          label: "Browser",
          active: true,
        },
        {
          id: 3,

          icon: <IconDeviceMobile />,
          label: "Apps",
          active: false,
        },
      ],
    },
  ];

  const items = () => {
    return (
      <>
        <div>
          <Grid>
            <Grid.Col xs={4}>
              <Text>News</Text>
            </Grid.Col>
            <Grid.Col xs={8}>
              <Button.Group>
                <Button variant="default" leftIcon={<IconMail />}>
                  Email
                </Button>
                <Button variant="default" leftIcon={<IconBrowser />}>
                  Browser
                </Button>
                <Button variant="default" leftIcon={<IconDeviceMobile />}>
                  Apps
                </Button>
              </Button.Group>
            </Grid.Col>
          </Grid>
          <Divider my="lg" />
          <Grid>
            <Grid.Col xs={4}>
              <Text>Active Product</Text>
            </Grid.Col>
            <Grid.Col xs={8}>
              <Button.Group>
                <Button variant="default" leftIcon={<IconMail />}>
                  Email
                </Button>
                <Button variant="default" leftIcon={<IconBrowser />}>
                  Browser
                </Button>
                <Button variant="default" leftIcon={<IconDeviceMobile />}>
                  Apps
                </Button>
              </Button.Group>
            </Grid.Col>
          </Grid>
          <Divider my="lg" />
        </div>
      </>
    );
  };

  return (
    <>
      <Box mb={50}>
        <PageTitle title="General Notification" subtitle="Select how you'll be notified when the following changes occur."></PageTitle>
      </Box>
      {items()}
      <Group mt={20}>
        <Button>Update</Button>
        <Button variant="subtle">Close</Button>
      </Group>
    </>
  );
}

export default NotificationPage;
