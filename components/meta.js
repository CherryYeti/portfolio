import { Badge } from '@chakra-ui/react'

export const Meta = ({ children }) => (
  <Badge
    fontSize={'md'}
    colorScheme="purple"
    mr={2}
    p={2}
    mb={2}
    borderRadius="xl"
  >
    {children}
  </Badge>
)
