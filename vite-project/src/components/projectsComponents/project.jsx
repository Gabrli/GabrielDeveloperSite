


export default function Project(props){
    const { id, title, repo, descryption, image, live } = props.element

  const projectImage = {
    backgroundImage: `url(${image})`
  }


    return (
        <div key={id} className="projects-box">
            <section className="multimedia-box">
                <header>
                    <p>
                        <b>
                            {title}
                        </b>
                    </p>
                </header>
                <div className="img-box" style={projectImage}></div>
                <div className="options-wrapper">
                    <a target="_blank" href={repo}>Repo</a>
                    <a target="_blank" href={live}>Live</a>

                </div>
            </section>
            <section className="descryption-box">
                <header>
                    <p><b>README.MD</b></p>
                </header>
                <div>
                    <p className="project-descryption">{descryption}</p>
                </div>
            </section>
        </div>
    )
}