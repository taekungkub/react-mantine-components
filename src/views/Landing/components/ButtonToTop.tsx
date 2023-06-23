import { IconArrowUp } from "@tabler/icons-react"
import { useWindowScroll } from "@mantine/hooks"
import { ActionIcon, Affix, Text, Transition, rem } from "@mantine/core"

export default function ButtonToTop() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon color="yellow" variant={"light"} size={"xl"} style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              <IconArrowUp size="1.125rem" />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  )
}
