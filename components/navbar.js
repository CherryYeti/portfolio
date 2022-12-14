import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#323232', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#7a7a7a' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#32323280')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      fontWeight="bold"
      fontSize={20}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="95vw"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <LinkItem href="/" path={path}>
          <Flex align="center" mt={0} mr={4}>
            <Heading href="/" as="h1" size="lg" letterSpacing={'tighter'}>
              <Image
                src="/logo/logo.svg"
                alt="logo"
                w={'30px'}
                h={'30px'}
              ></Image>
            </Heading>
          </Flex>
        </LinkItem>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="#home" path={path}>
            Home
          </LinkItem>
          <LinkItem href="#about" path={path}>
            About Me
          </LinkItem>
          <LinkItem href="#skills" path={path}>
            My Skills
          </LinkItem>
          <LinkItem href="#projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/cherryyeti/portfolio"
            path={path}
          >
            Source
            <ExternalLinkIcon />
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="#about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="#skills" passHref>
                  <MenuItem as={Link}>Skills</MenuItem>
                </NextLink>
                <NextLink href="#projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/cherryyeti/portfolio"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
