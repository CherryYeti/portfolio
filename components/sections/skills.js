import ItemGrid from '../itemgrid'
import { Text } from '@chakra-ui/react'
import Header from '../header'
const Skills = () => (
  <section id="skills">
    <Header title="My Skills" />
    <ItemGrid />
    <Text fontSize={'30px'} mb={10}>
      Over the last couple of years, I&apos;ve started to explore different
      avenues for programming. I wanted to branch outside of my comfort zone and
      learn new things. Recently, I have been learning to create websites using
      Javascript frameworks, which this website is built with!
    </Text>
  </section>
)
export default Skills
