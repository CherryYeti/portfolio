import { Container } from '@chakra-ui/react'
import Title from '../components/sections/title'
import About from '../components/sections/about'
import Skills from '../components/sections/skills'
import Projects from '../components/sections/projects'
import Footer from '../components/footer'
import axios from 'axios'

export const getStaticProps = async () => {
  const github = (
    await axios.get('https://gh-pinned-repos.egoist.dev/', {
      params: { username: 'cherryyeti' }
    })
  ).data
  return {
    props: {
      github
    },
    revalidate: 60
  }
}

const Page = ({ github }) => {
  return (
    <Container w="100%" maxWidth={'95vw'}>
      <Title />
      <About />
      <Skills />
      <Projects data={github} />
      <Footer />
    </Container>
  )
}
export default Page
