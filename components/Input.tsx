import { ComponentProps } from "react"
import styles from "./Input.module.css"

interface Props extends ComponentProps<"input"> {
    variant?: "default" | "dark"
    label?: string;
    labelClassName?: string;
    required?: boolean;
}

export default function Input({ variant="default", label, labelClassName, required, ...props}: Props) {
    return (
        <div className={styles.todoInput}>
            <div className={styles.line}>
                <label className={styles[variant]}>{label}</label>
                {required && <p className={styles.asterisco}>*</p>}
                <p className={styles[variant]}>:</p>
            </div>
            <input className={styles.input} {...props} />
        </div>
    )
}