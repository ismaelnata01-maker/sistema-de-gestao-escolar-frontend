import { ComponentProps } from "react"
import styles from "./Input.module.css"

interface Props extends ComponentProps<"input"> {
    variant?: "default" | "dark"
    label?: string;
    labelClassName?: string;
    required?: boolean;
    caption?: string;
}

export default function Input({ variant="default", label, labelClassName, required, caption, ...props}: Props) {
    return (
        <div className={styles.todoInput}>
            <div className={styles.line}>
                <label className={`${styles[variant]} ${styles.label}`}>{label}</label>
                {required && <p className={styles.asterisco}>*</p>}
                <p className={`${styles[variant]} ${styles.label}`}>:</p>
            </div>
            <input className={styles.input} {...props} />
            <p className={styles.caption}>{caption}</p>
        </div>
    )
}