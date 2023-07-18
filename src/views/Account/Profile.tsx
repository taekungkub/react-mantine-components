import { UserCardImage } from "./components/UserCardImage";
import UserData from "../../constant/UserData.json";
import { Grid } from "@mantine/core";
import UserInfoForm from "./components/UserInfoForm";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import useAuth from "@/context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <Grid>
        <Grid.Col xs={4}>
          <UserCardImage
            image={user?.image as string}
            stats={[
              { label: "Twitter", icon: IconBrandTwitter },
              { label: "Facebook", icon: IconBrandFacebook },
              { label: "Instagram", icon: IconBrandInstagram },
            ]}
            name={user?.firstName as string}
            job={UserData.props.job}
          />
        </Grid.Col>
        <Grid.Col xs={8}>
          <UserInfoForm />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default ProfilePage;
