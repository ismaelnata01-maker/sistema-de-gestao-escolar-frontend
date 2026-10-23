import styles from "./page.module.css";

export default function Login(){
  return(
    <div>
      <div>
        <h1>Login</h1>
      </div>
      
      <div>
        <div className={styles.line}>
          <h3>Email </h3>
          <h3 className={styles.asterisco}>*</h3>
        </div>
      <input type="text" className={styles.input} placeholder="Digite seu email"/>
      </div>

      <div>
      <div className={styles.line}>
          <h3>Senha </h3>
          <h3 className={styles.asterisco}>*</h3>
        </div>
      <input type="text" className={styles.input} placeholder="Digite sua senha"/>
      <p className={styles.caption}>Mínimo 8 caracteres</p>
      </div>

      <button>Entrar</button>

    </div>
  )
}