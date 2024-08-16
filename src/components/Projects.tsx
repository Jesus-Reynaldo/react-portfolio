import { Card } from "./Card"
import { Project } from '../interfaces';
interface Props{
  projects:Project[]
}
export const Projects = ({projects}:Props) => {
  return (
    <section id="projects" className="flex w-full h-full px-6 pt-10 justify-center items-start " >
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 p-4  ">
      {
        projects.map((project)=>(
          <Card key={project.title} {...project} />
        ))
      }
      </div>      
    </section>
  )
}
