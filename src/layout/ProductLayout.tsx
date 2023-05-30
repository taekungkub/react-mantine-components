import { ActionIcon, Box, Button, Drawer, Flex, Grid, Group, MediaQuery, Menu, Text, Title, createStyles, rem } from "@mantine/core"
import { Outlet, useParams, useSearchParams } from "react-router-dom"
import FilterProducts from "../components/Ecommerce/FilterProducts"
import { IconSortAscending2 } from "@tabler/icons-react"
import { useSelector } from "react-redux"
import { productSelector } from "../store/slices/productSlice"
import { categorySelector } from "../store/slices/categorySlice"
import { useEffect, useState } from "react"
import { useDisclosure } from "@mantine/hooks"
import MyBreadcrumbs from "../components/MyBreadcrumbs"

const useStyles = createStyles((theme) => ({
  link: {
    transition: "color 200ms ease",
  },

  linkActive: {
    color: theme.colors.blue[4],
    "&:hover": {
      color: theme.colors.blue[4],
    },
  },
}))

export default function ProductLayout() {
  const productReducer = useSelector(productSelector)
  const categoryReducer = useSelector(categorySelector)
  const { name } = useParams()

  const [sortBy, setSortBy] = useState<string>()
  const [searchParams, setSearchParams] = useSearchParams()

  const { classes, cx } = useStyles()

  useEffect(() => {
    if (sortBy) {
      setSearchParams((prevParams) => {
        return new URLSearchParams({
          ...Object.fromEntries(prevParams.entries()),
          ...{
            sortBy: sortBy,
          },
        })
      })
    }
  }, [sortBy])

  function handleSort(sort: string) {
    setSortBy(sort)
  }

  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <MyBreadcrumbs
        items={
          name
            ? [
                { title: "Home", href: "/" },
                { title: "Products", href: "/redux/products" },
                { title: name, href: "#" },
              ]
            : [
                { title: "Home", href: "/" },
                { title: "Products", href: "/redux/products" },
              ]
        }
      />

      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Drawer opened={opened} onClose={close} overlayProps={{ opacity: 0.5, blur: 4 }}>
          <FilterProducts />
        </Drawer>
      </MediaQuery>
      <Grid>
        <Grid.Col sm={3} xl={2}>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box>
              <FilterProducts />
            </Box>
          </MediaQuery>
        </Grid.Col>
        <Grid.Col sm={9} xl={10}>
          <Grid>
            <Grid.Col span={12}>
              <Flex justify={"space-between"}>
                <Title order={4}>
                  {name ? name : "Product All"} ({name ? categoryReducer.categoryProducts.length : productReducer.products.length})
                </Title>

                <Group>
                  <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                    <ActionIcon variant="outline" color="blue" size={"lg"} onClick={() => open()}>
                      <IconSortAscending2 />
                    </ActionIcon>
                  </MediaQuery>
                  <Menu width={200} shadow="md">
                    <Menu.Target>
                      <Button variant="outline" leftIcon={<IconSortAscending2 />}>
                        Filter
                      </Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item
                        onClick={() => handleSort("lowest_price")}
                        className={cx(classes.link, { [classes.linkActive]: searchParams.get("sortBy") === "lowest_price" })}
                      >
                        Low price
                      </Menu.Item>
                      <Menu.Item
                        onClick={() => handleSort("highest_price")}
                        className={cx(classes.link, { [classes.linkActive]: searchParams.get("sortBy") === "highest_price" })}
                      >
                        High price
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Group>
              </Flex>
            </Grid.Col>
          </Grid>
          <Outlet />
        </Grid.Col>
      </Grid>
    </>
  )
}
