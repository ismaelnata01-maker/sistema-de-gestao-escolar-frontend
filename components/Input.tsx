import { ComponentProps } from "react"
import styles from "./Input.module.css"

interface Props extends ComponentProps<"input"> {
    label?: string;
    labelClassName?: string;
    required?: boolean;
}

export default function Input({ label, labelClassName, required, ...props}: Props) {
    return (
        <div className={styles.todoInput}>
            <div className={styles.line}>
                <label className={`${styles.descricao} ${labelClassName}`}>{label}</label>
                {required && <p className={styles.asterisco}>*</p>}
                <p className={styles.doisPontos}>:</p>
            </div>
            <input className={styles.input} {...props} />
        </div>
    )
}