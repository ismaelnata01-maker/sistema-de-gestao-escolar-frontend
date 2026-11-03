import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Perfil() {
  return (
    <div className={styles.tudo}>
      <header className={styles.header}>
        <Sidebar />
        <h1 className={styles.title}>Perfil</h1>
      </header>

      <div className={styles.informacoes}>
        <div className={styles.line}>
          <div className={styles.descricao}>Cargo</div>
          <div className={styles.asterisco}>*</div>
          <div className={styles.doisPontos}>:</div>
        </div>
        <input className={styles.input} type="text" value={""} />


        <div className={styles.line}>
          <div className={styles.descricao}>CPF</div>
          <div className={styles.asterisco}>*</div>
          <div className={styles.doisPontos}>:</div>
        </div>

        <input className={styles.input} type="text" value={""} />


        <div className={styles.line}>
          <div className={styles.descricao}>Nome</div>
          <div className={styles.doisPontos}>:</div>
        </div>

        <input className={styles.input} type="text" value={""} />

        <div className={styles.line}>
          <div className={styles.descricao}>Data de nascimento</div>
          <div className={styles.doisPontos}>:</div>
        </div>
        <input className={styles.input} type="text" value={""} />

        <div className={styles.line}>
          <div className={styles.descricao}>Email</div>
          <div className={styles.asterisco}>*</div>
          <div className={styles.doisPontos}>:</div>
        </div>

        <input className={styles.input} type="text" value={""} />

        <div className={styles.line}>
          <div className={styles.descricao}>Telefone</div>
          <div className={styles.doisPontos}>:</div>
        </div>

        <input className={styles.input} type="text" value={""} />


        <div className={styles.line}>
          <div className={styles.descricao}>Endereço</div>
          <div className={styles.doisPontos}>:</div>
        </div>

        <input className={styles.input} type="text" value={""} />

        <div className={styles.line}>
          <div className={styles.descricao}>Senha</div>
          <div className={styles.asterisco}>*</div>
          <div className={styles.doisPontos}>:</div>
        </div>

        <input className={styles.input} type="password" value={""} />
      </div>

      <Button className={styles.button} variant="primary">Entrar</Button>

    </div>
  )
}