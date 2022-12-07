import { Heading } from '@chakra-ui/react'

const Header = ({ title }) => (
  <Heading as="h1" size="3xl" mb={8} color="#D97E96">
    {title}
  </Heading>
)
export default Header
