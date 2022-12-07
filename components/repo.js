import { Image, Box } from '@chakra-ui/react'
const Repo = data => {
  return (
    <Box w={{ md: '100%' }}>
      <a href={data.link} target="_blank" rel="noreferrer">
        <Image src={data.src} alt={data.repo} borderRadius="5px" />
      </a>
    </Box>
  )
}
export default Repo
