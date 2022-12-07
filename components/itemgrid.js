import { Box, Flex, Spacer } from '@chakra-ui/react'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript
} from 'react-icons/si'
const ItemGrid = () => (
  <section>
    <Flex
      p={{ base: 4, md: 14 }}
      w="100%"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
    >
      <Box w={{ lg: '10%' }} mb={8}>
        <a target="_blank" href="https://www.javascript.com/" rel="noreferrer">
          <SiJavascript size={70} color="#F0DB4F" />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }}mb={8}>
        <a
          target="_blank"
          href="https://www.typescriptlang.org/"
          rel="noreferrer"
        >
          <SiTypescript size={70} color="#3178C6" />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }} mb={8} alignItems="center">
        <a target="_blank" href="https://www.nodejs.org/" rel="noreferrer">
          <SiNodedotjs size={70} color="#3C873A" />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }} mb={8}>
        <a
          target="_blank"
          href="https://www.w3schools.com/html/"
          rel="noreferrer"
        >
          <SiHtml5 size={70} color="#F06529" />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }} mb={8}>
        <a
          target="_blank"
          href="https://www.w3schools.com/css/"
          rel="noreferrer"
        >
          <SiCss3 size={70} color="#2965f1" />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }} mb={8}>
        <a target="_blank" href="https://www.nextjs.org/" rel="noreferrer">
          <SiNextdotjs size={70} />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }} mb={8}>
        <a target="_blank" href="https://www.reactjs.org/" rel="noreferrer">
          <SiReact size={70} color="#61dbfb" />
        </a>
      </Box>
      <Spacer />
      <Box w={{ lg: '10%' }} mb={8}>
        <a target="_blank" href="https://www.python.org/" rel="noreferrer">
          <SiPython size={70} />
        </a>
      </Box>
      <Spacer />
    </Flex>
  </section>
)
export default ItemGrid
