import './styles/card.css'

export const CardProject = ({
    id,
    title,
    description,
    difficulty,
    img,
    techs,
    urlGithub,
    urlProject
}) => {
  return (
    <div className="card">
        <div className="card-image">
            <img src={img} alt={title} />
        </div>
        <div className="card-info">
            <h2 className="card-title-project">{title}</h2>
            <div className="card-info-row">
                {
                    <>
                    <div className="difficulty-status">
                        { difficulty == 'Easy' ? (
                            <span className="status-easy"></span>
                        ) : difficulty == 'Medium' ? (
                            <span className="status-medium"></span>
                        ) : (
                            <span className="Hard"></span>
                        )}
                    </div>
                    <div className="info-project">
                       {difficulty} - {title} 
                    </div>
                    </>
                }
            </div>
            <p className='description'>{description}</p>
            <p className='techs'>{techs}</p>
            <div className="project-buttons">
                <a href={urlGithub} className='github-url'>Go to Github Project Repository</a>
                <a href={urlProject} className='project-url'>Live project</a>
            </div>
        </div>
    </div>
  )
}
