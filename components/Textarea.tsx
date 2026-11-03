import { ComponentProps } from "react"
import styles from "./Input.module.css"

interface Props extends ComponentProps<"textarea"> {
    label?: string;
    required?: boolean;
}

export default function Input({ label, required, ...props}: Props) {
    return (
        <div className={styles.todoInput}>
            <div className={styles.line}>
                <label className={styles.descricao}>{label}</label>
                {required && <p className={styles.asterisco}>*</p>}
                <p className={styles.doisPontos}>:</p>
            </div>
            <textarea className={styles.input} {...props} />
        </div>
    )
}