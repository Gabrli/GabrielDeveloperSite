import { descryptions } from "./descryptionsObj/descryptions"
import Project from "./project"
import projectImg1 from '../../assets/pro1.png'
import projectImg2 from '../../assets/pro2.png'
import projectImg3 from '../../assets/pro3.png'
export default function ProjectsList(){

    const projects = [
        {id: Math.random(), title: 'Online Dictionary', repo: 'https://github.com/Gabrli/Dictionary-app', live: 'https://gabrli.github.io/Dictionary-app/', descryption: descryptions[0], image: projectImg2},
        {id: Math.random(), title: 'Web Portfolio', repo: 'https://github.com/Gabrli/GabrielDeveloperSite', live: 'https://gabrli.github.io/GabrielDeveloperSite/', descryption: descryptions[1], image: projectImg1},
        {id: Math.random(), title: 'GOPR Karkonosze, sekcja kontaktowa',  live: 'https://gopr.org/kontakt', descryption: descryptions[2], image: projectImg3}
    ]

    return (
        <div className="projects_wrapper">
            {
                projects.map((project) => {
                    return <Project element={project}/>
                })
            }
        </div>
    )
}