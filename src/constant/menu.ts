import {
  IconCompass,
  IconError404,
  IconFileAnalytics,
  IconHome,
  IconLogin,
  IconNotes,
  IconShoppingCart,
  IconUser,
  IconUsers,
  IconUsersGroup,
} from "@tabler/icons-react"

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
    links: [{ label: "Profile", link: "/account/profile" }],
  },

  {
    label: "Components",
    icon: IconCompass,
    links: [
      { label: "Button", link: "/components/button" },
      { label: "Card", link: "/components/card" },
    ],
  },
  {
    label: "Sales",
    icon: IconShoppingCart,
    initiallyOpened: false,
    links: [
      { label: "Product List", link: "/products" },
      { label: "New Product", link: "/products/new" },
      { label: "Edit Product", link: "/products/1" },
    ],
  },

  {
    label: "CRM",
    icon: IconUsers,
    links: [{ label: "Customer", link: "/crm/customer" }],
  },

  {
    label: "Auth",
    icon: IconLogin,
    initiallyOpened: false,
    links: [
      { label: "Sign In", link: "/signin" },
      { label: "Sign Up", link: "/signup" },
      { label: "Verify Email", link: "/verify/email/codeexampletest" },
      { label: "Reset Password", link: "/resetpassword" },
    ],
  },

  {
    label: "Exception",
    icon: IconError404,
    initiallyOpened: false,

    links: [
      { label: "403", link: "/exeception/403" },
      { label: "404", link: "/exeception/404" },
      { label: "503", link: "/exeception/503" },
    ],
  },
  { label: "Contracts", icon: IconFileAnalytics, link: "/contracts" },
]
