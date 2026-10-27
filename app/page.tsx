import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Login(){
  return(
    <div className={styles.tudo}>
      <div>
        <h1>Login</h1>
      </div>
      
      <div>
        <div className={styles.line}>
          <h3 className={styles.text}>Email </h3>
          <h3 className={`${styles.asterisco} ${styles.text}`}>*</h3>
        </div>
        <input type="text" className={styles.input} placeholder="Digite seu email"/>
      </div>

      <div>
        <div className={styles.line}>
            <h3 className={styles.text}>Senha </h3>
            <h3 className={`${styles.asterisco} ${styles.text}`}>*</h3>
          </div>
        <input type="password" className={styles.input} placeholder="Digite sua senha"/>
        <p className={styles.caption}>Mínimo 8 caracteres</p>
      </div>

      <Button variant="primary">Entrar</Button>

    </div>
  )
}