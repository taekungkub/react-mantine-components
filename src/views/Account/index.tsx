import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import PageTitle from "../../components/PageTitle";
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AccountLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string | null>("profile");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div>
      <PageTitle>Settings </PageTitle>

      <Tabs value={activeTab} onTabChange={setActiveTab} defaultValue="profile" mt={10}>
        <Tabs.List>
          <Tabs.Tab value="/account/profile" icon={<IconPhoto size="0.8rem" />} onClick={() => navigate("/account/profile")}>
            Profile
          </Tabs.Tab>
          <Tabs.Tab value="/account/password" icon={<IconMessageCircle size="0.8rem" />} onClick={() => navigate("/account/password")}>
            Password
          </Tabs.Tab>
          <Tabs.Tab value="/account/notification" icon={<IconSettings size="0.8rem" />}>
            Notification
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
      </Tabs>
    </div>
  );
}
