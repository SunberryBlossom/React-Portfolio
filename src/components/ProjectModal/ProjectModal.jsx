import Styles from "./ProjectModal.module.css"
import Button from "../Button/Button";

export default function ProjectModal ({imageUrl, title, text}) {

    return (
        <div className={Styles.overlay}>
            <div className={Styles.modal}>
                <div className={Styles.topSection}>
                    <img className={Styles.img} src={imageUrl} />
                    <button className={Styles.closeButton}>+</button>
                </div>
                <div className={Styles.middleSection}>
                    <div className={Styles.header}>
                        <h2>{title}</h2>
                    </div>
                    <div className={Styles.body}>
                        <p>{text}</p>
                        <div className={Styles.techStack}></div>
                    </div>
                </div>
                <div className={Styles.bottomSection}>
                    <Button
                        style={{
                            boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.4)",
                            backgroundColor: "var(--tertiary-color)"
                        }}
                        text="Github Repo"
                    />
                </div>
            </div>
        </div>
    )
}