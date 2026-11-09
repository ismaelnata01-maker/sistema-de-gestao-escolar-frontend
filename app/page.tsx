import Button from "@/components/Button";
import styles from "./page.module.css";

import { login } from "./actions"; 
import Input from "@/components/Input";

export default function Login(){
  return(
    <form className={styles.tudo} action={login}>
      <h1 className={styles.title}>Login</h1>
      
      <div className={styles.inputs}>
        <Input label="Email" name="email" type="email" placeholder="Digite seu email" required={true} variant="dark"/>
        <Input label="Senha" name="senha" type="password" placeholder="Digite sua senha" required={true} variant="dark" caption="Minimo 8 caracteres"/>
      </div>
      

      <Button type="submit" variant="primary" className={styles.button}>Entrar</Button>

    </form>
  )
}