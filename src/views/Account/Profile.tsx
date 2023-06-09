import { UserCardImage } from "./components/UserCardImage"
import UserData from "../../constant/UserData.json"
import { Grid } from "@mantine/core"
import UserInfoForm from "./components/UserInfoForm"
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react"

function ProfilePage() {
  return (
    <div>
      <Grid>
        <Grid.Col xs={4}>
          <UserCardImage
            image={UserData.props.image}
            stats={[
              { label: "Twitter", icon: IconBrandTwitter },
              { label: "Facebook", icon: IconBrandFacebook },
              { label: "Instagram", icon: IconBrandInstagram },
            ]}
            avatar={UserData.props.avatar}
            name={UserData.props.name}
            job={UserData.props.job}
          />
        </Grid.Col>
        <Grid.Col xs={8}>
          <UserInfoForm />
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default ProfilePage
