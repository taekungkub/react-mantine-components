import { Tabs } from "@mantine/core"
import { IconPhoto, IconMessageCircle, IconSettings, IconMoneybag } from "@tabler/icons-react"
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom"
import { useEffect, useState } from "react"

export default function AccountLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<string | null>("profile")

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location])

  return (
    <div>
      <Tabs value={activeTab} onTabChange={setActiveTab} defaultValue="profile">
        <Tabs.List>
          <Tabs.Tab value="/account/profile" icon={<IconPhoto size="0.8rem" />} onClick={() => navigate("/account/profile")}>
            Profile
          </Tabs.Tab>
          <Tabs.Tab value="/account/password" icon={<IconMessageCircle size="0.8rem" />} onClick={() => navigate("/account/password")}>
            Password
          </Tabs.Tab>
          <Tabs.Tab value="/account/notification" icon={<IconSettings size="0.8rem" />} onClick={() => navigate("/account/notification")}>
            Notification
          </Tabs.Tab>
          <Tabs.Tab value="/account/billing" icon={<IconMoneybag size="0.8rem" />} onClick={() => navigate("/account/billing")}>
            Billing
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="/account/profile" pt="xs" mt={10}>
          <Outlet />
        </Tabs.Panel>

        <Tabs.Panel value="/account/password" pt="xs" mt={10}>
          <Outlet />
        </Tabs.Panel>

        <Tabs.Panel value="/account/notification" pt="xs" mt={10}>
          <Outlet />
        </Tabs.Panel>
        <Tabs.Panel value="/account/billing" pt="xs" mt={10}>
          <Outlet />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
