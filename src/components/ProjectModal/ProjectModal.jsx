import Styles from "./ProjectModal.module.css"
import Button from "../Button/Button";

export default function ProjectModal ({imageUrl, title, text, onClose, link}) {

    return (
        <div className={Styles.overlay} onClick={onClose}>
            <div className={Styles.modal} onClick={(event) => event.stopPropagation()}>
                <div className={Styles.topSection}>
                    <img className={Styles.img} src={imageUrl} loading="lazy" decoding="async" />
                    <button onClick={onClose} className={Styles.closeButton}>+</button>
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
                        link={link}
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