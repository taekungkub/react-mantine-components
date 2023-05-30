import { useEffect, useState } from "react"
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  createStyles,
  rem,
  getStylesRef,
  Navbar,
  ScrollArea,
  Checkbox,
  Divider,
  RangeSlider,
  Rating,
  Button,
  Flex,
} from "@mantine/core"
import { IconCalendarStats, IconChevronLeft, IconChevronRight, IconLogout, IconStar } from "@tabler/icons-react"
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { link } from "joi"

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colors.blue[4],
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colors.blue[4],
    },
    transition: "color 200ms ease",
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}))

interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: { label: string; value: string }[]
  isPrice?: boolean
  maxPrice?: number
  minPrice?: number
  isRating?: boolean
}

export function FilterLinkGroup({ label, initiallyOpened, links, isPrice, maxPrice, minPrice, isRating }: LinksGroupProps) {
  const { classes, theme, cx } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft
  const [searchParams, setSearchParams] = useSearchParams()

  const [rangeValue, setRangeValue] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) ?? minPrice,
    Number(searchParams.get("maxPrice")) ?? maxPrice,
  ])

  const [rating, setRating] = useState(searchParams.get("rating") ?? "")

  useEffect(() => {
    if (rangeValue[0]) {
      setSearchParams((prevParams) => {
        return new URLSearchParams({
          ...Object.fromEntries(prevParams.entries()),
          ...{
            minPrice: rangeValue[0].toString(),
          },
        })
      })
    }
  }, [rangeValue[0]])

  useEffect(() => {
    if (rangeValue[1]) {
      setSearchParams((prevParams) => {
        return new URLSearchParams({
          ...Object.fromEntries(prevParams.entries()),
          ...{
            maxPrice: rangeValue[1].toString(),
          },
        })
      })
    }
  }, [rangeValue[1]])

  useEffect(() => {
    if (rating) {
      setSearchParams((prevParams) => {
        return new URLSearchParams({
          ...Object.fromEntries(prevParams.entries()),
          ...{
            rating: rating,
          },
        })
      })
    }
  }, [rating])

  const items = (hasLinks ? links : []).map((link, index) => {
    if (isPrice) {
      return (
        <Box my={40} px={theme.spacing.md} key={index}>
          <RangeSlider
            thumbSize={17}
            mt="xl"
            defaultValue={[Number(searchParams.get("minPrice")) ?? minPrice, Number(searchParams.get("maxPrice"))] ?? maxPrice}
            min={minPrice}
            max={maxPrice}
            onChange={setRangeValue}
          />
        </Box>
      )
    } else if (isRating) {
      return (
        <Flex wrap={"wrap"} gap={10} my={20} px={theme.spacing.md} key={index}>
          <Button variant="outline" onClick={() => setRating("5")}>
            5
          </Button>
          <Button variant="outline" onClick={() => setRating("4")}>
            4
          </Button>
          <Button variant="outline" onClick={() => setRating("3")}>
            3
          </Button>
          <Button variant="outline" onClick={() => setRating("2")}>
            2
          </Button>
          <Button variant="outline" onClick={() => setRating("1")}>
            1
          </Button>
        </Flex>
      )
    } else {
      return (
        <Box className={cx(classes.link)} key={index}>
          <Checkbox label={link.label} value={link.value} />
        </Box>
      )
    }
  })

  return (
    <>
      <Divider />
      <UnstyledButton
        py={20}
        onClick={() => {
          setOpened((o) => !o)
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box> {label} </Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)` : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <ScrollArea.Autosize mah={200}>
          <Collapse in={opened}>{items}</Collapse>
        </ScrollArea.Autosize>
      ) : null}
    </>
  )
}
