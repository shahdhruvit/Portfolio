import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    return (
        <div className="px-16 my-10 font-mono md-mx:px-6" id="Projects">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-center mb-10 text-white">
                <span className="text-primaryColor">02.&nbsp;</span>Projects</h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                    ProjectInfo.map((project:any,index:number)=>
                    <ProjectCard key={index} title={project.title} 
                    desc={project.desc} image={project.image} github={project.github}
                     technologies={project.technologies} />)
                }
            </div>
        </div>
    )

}
export default Projects;