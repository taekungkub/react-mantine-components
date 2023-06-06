import {
  IconBlockquote,
  IconBrandRedux,
  IconBrandWebflow,
  IconCompass,
  IconError404,
  IconFileAnalytics,
  IconHome,
  IconLockAccess,
  IconLogin,
  IconNotes,
  IconProgressCheck,
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
    activeLinks: ["/account/profile", "/account/password", "/account/notification", "/account/billing"],
  },

  {
    label: "Components",
    icon: IconCompass,
    links: [{ label: "Button", link: "/components/button" }],
    activeLinks: ["/components/button"],
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
    activeLinks: ["/products", "/products/new", "/products/:detail"],
  },

  {
    label: "CRM",
    icon: IconUsers,
    links: [{ label: "Customer", link: "/crm/customer" }],
  },

  {
    label: "Redux",
    icon: IconBrandRedux,
    initiallyOpened: false,

    links: [
      { label: "Counter", link: "/redux/counter" },
      { label: "Products", link: "/redux/products" },
      { label: "Products Detail", link: "/redux/product/smartphones/1" },
      { label: "Checkout", link: "/redux/checkout" },
    ],
  },

  {
    label: "Auth",
    icon: IconLogin,
    initiallyOpened: false,
    links: [
      { label: "Sign In", link: "/signin" },
      { label: "Sign Up", link: "/signup" },
      { label: "Forgot Password", link: "/forgotpassword" },
      { label: "Verify Email", link: "/verify/email/codeexampletest" },
      { label: "Reset Password", link: "/resetpassword" },
      { label: "Code Verify", link: "/code-verify" },
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

  {
    label: "Permission",
    icon: IconLockAccess,
    initiallyOpened: false,

    links: [
      { label: "Auth", link: "/permission/auth" },
      { label: "Admin", link: "/permission/admin" },
      { label: "Super Secret", link: "/permission/secret" },
    ],
  },
  { label: "Contract", icon: IconFileAnalytics, link: "/contact" },

  {
    label: "Landing Page",
    icon: IconBrandWebflow,
    initiallyOpened: false,
    link: "/landing",
  },
  {
    label: "Projects",
    icon: IconProgressCheck,
    initiallyOpened: false,
    link: "/projects",
  },
  {
    label: "Web3",
    icon: IconBlockquote,
    initiallyOpened: false,
    link: "/web3",
  },
]
