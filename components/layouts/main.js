import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <title>Jason Javandel</title>
      </Head>
      <Navbar />
      <Container maxW="container.xl" pt={14} pl={0} pr={0}>
        {children}
      </Container>
    </Box>
  )
}
export default Main
