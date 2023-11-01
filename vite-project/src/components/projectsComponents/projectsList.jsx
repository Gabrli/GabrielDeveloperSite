import { descryptions } from "./descryptionsObj/descryptions"
import Project from "./project"
import projectImg1 from '../../assets/polite1.png'
import projectImg2 from '../../assets/pro2.png'
import projectImg3 from '../../assets/pro3.png'
export default function ProjectsList(){

    const projects = [
        {id: Math.random(), title: 'Online Dictionary', repo: 'https://github.com/Gabrli/Dictionary-app', live: 'https://gabrli.github.io/Dictionary-app/', descryption: descryptions[0], image: projectImg2},
        {id: Math.random(), title: 'Polite Email Builder', repo: 'https://github.com/Gabrli/PolitesEmailBuilder-new-version-2.0', live: 'https://politesemailbuilder-new-version-20.gabrys564.repl.co/', descryption: descryptions[1], image: projectImg1},
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