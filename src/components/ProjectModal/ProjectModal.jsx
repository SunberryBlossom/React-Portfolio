
export default function ProjectModal ({imageUrl, title, text}) {

    return (
        <div>
            <div>
                <img src={imageUrl} />
                <button>X</button>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <div></div>
            </div>
            <div>
                <Button text="Github Repo" />
            </div>
        </div>
    )
}