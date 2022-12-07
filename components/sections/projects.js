import Header from '../header'
import { SimpleGrid } from '@chakra-ui/react'
import Repo from '../repo'
import { Spacer } from '@chakra-ui/react'
const Projects = data => {
  return (
    <section id="projects">
      <Header title="My Github Projects" />
      <SimpleGrid columns={2} spacing={10} mb={10}>
        {data.data.map(repo => (
          <section key={repo.repo}>
            <Repo src={repo.image} repo={repo.repo} link={repo.link} />
            <Spacer />
          </section>
        ))}
      </SimpleGrid>
    </section>
  )
}

export default Projects
