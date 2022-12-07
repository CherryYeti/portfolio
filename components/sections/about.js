import { Text } from '@chakra-ui/react'
import Header from '../header'
const About = () => (
  <section id="about">
    <Header title="About Me" />
    <Text fontSize={'30px'} mb={10}>
      Hello! I am an 18 year old freshman at the University of California,
      Merced who believes in open source projects. I am majoring in computer
      science, and I love creating!
    </Text>
  </section>
)
export default About
