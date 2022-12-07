import Subtitle from '../subtitle'
import {
  Flex,
  Stack,
  Heading,
  Spacer,
  Box,
  Image,
  Button
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
const Title = () => (
  <section>
    <Flex
      p={{ base: 4, md: 14 }}
      w="100%"
      direction={{ base: 'column-reverse', md: 'row' }}
      id="home"
    >
      <Stack w={{ md: '50%' }} justify="center" spacing={3}>
        <Heading pt={10} as="h2" size="xl">
          Hello I&apos;m
        </Heading>
        <Heading as="h1" color={'#D97E96'} size="3xl">
          Jason Javandel
        </Heading>
        <Subtitle />
      </Stack>
      <Spacer mb={5} mr={10} />
      <Box w={{ md: '30%' }} mr={0}>
        <Image
          src="/logo/logo.svg"
          alt="logo"
          shadow={'dark-lg'}
          borderRadius="35px"
        ></Image>
      </Box>
    </Flex>
    <Box align="center" my={4} gap="2" mb={20}>
      <NextLink href="#about" passHref scroll={true}>
        <Button
          rightIcon={<ChevronDownIcon />}
          colorScheme="pink"
          mr={2}
          mb={5}
        >
          About Me
        </Button>
      </NextLink>
      <NextLink href="#skills" passHref scroll={true}>
        <Button
          rightIcon={<ChevronDownIcon />}
          colorScheme="pink"
          ml={2}
          mr={2}
          mb={5}
        >
          My Skills
        </Button>
      </NextLink>
      <NextLink href="#projects" passHref scroll={true}>
        <Button
          rightIcon={<ChevronDownIcon />}
          colorScheme="pink"
          ml={2}
          mb={5}
        >
          My Projects
        </Button>
      </NextLink>
    </Box>
  </section>
)
export default Title
