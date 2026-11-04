import Button from "@/components/Button";
import styles from "./page.module.css";

import { login } from "./actions"; 
import Input from "@/components/Input";

export default function Login(){
  return(
    <form className={styles.tudo} action={login}>
      <div>
        <h1>Login</h1>
      </div>
      
        

      <Input label="Email" name="email" type="email" placeholder="Digite seu email" required={true} variant="dark"/>

      <div>
        <div className={styles.line}>
            <h3 className={styles.text}>Senha </h3>
            <h3 className={`${styles.asterisco} ${styles.text}`}>*</h3>
          </div>
        <input name="senha" type="password" className={styles.input} placeholder="Digite sua senha"/>
        <p className={styles.caption}>Mínimo 8 caracteres</p>
      </div>

      <Button variant="primary">Entrar</Button>

    </form>
  )
}