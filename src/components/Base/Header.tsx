import React from 'react'
import {
  createStyles,
  Header as BaseHeader,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Session } from 'next-auth/core/types'
import AuthShowcase from '@/src/components/Common/AuthShowcase'

type Props = {
  session: Session | null
}

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

const Header: React.FC<Props> = ({ session }) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const { classes, theme } = useStyles()
  return (
    <Box pb={120}>
      <BaseHeader height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <p className="text-lg font-bold">ServiceName</p>
          <Group className={`${classes.hiddenMobile}`}>
            <AuthShowcase session={session} />
            <Button className="bg-purple-500">Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </BaseHeader>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default Header
