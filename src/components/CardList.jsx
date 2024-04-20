import { CardProject } from "./CardProject"

export const CardList = ({projects, loading}) => {
  return (
    <>
    <h1 className="list-title">
        <div className="list">
            { loading ? (
                <h2>Loading...</h2>
            ) : (
                projects.map(project => {
                    return (
                        <div key={project.id} className="list-row">
                            <div className="list-col">
                                <CardProject {...project} />
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    </h1>
    </>
  )
}
