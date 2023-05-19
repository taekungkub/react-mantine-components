import { IconCompass, IconError404, IconFileAnalytics, IconHome, IconLogin, IconNotes, IconUser } from "@tabler/icons-react";

export const mockdata = [
  {
    label: "Home",
    icon: IconHome,
    link: "/",
  },
  {
    label: "Dashboard",
    icon: IconNotes,
    link: "/dashboard",
  },
  {
    label: "Account",
    icon: IconUser,
    initiallyOpened: false,

    links: [
      { label: "Profile", link: "/profile" },
      { label: "Settings", link: "/settings" },
    ],
  },
  {
    label: "Components",
    icon: IconCompass,
    links: [{ label: "Card", link: "/profile" }],
  },

  {
    label: "Auth",
    icon: IconLogin,
    initiallyOpened: false,

    links: [
      { label: "Sign In", link: "" },
      { label: "Sign Up", link: "" },
      { label: "Verify Email", link: "" },
      { label: "Reset Password", link: "" },
    ],
  },
  {
    label: "Exception",
    icon: IconError404,
    initiallyOpened: false,

    links: [
      { label: "403", link: "" },
      { label: "404", link: "" },
      { label: "502", link: "" },
    ],
  },
  { label: "Contracts", icon: IconFileAnalytics, link: "/contracts" },
];
