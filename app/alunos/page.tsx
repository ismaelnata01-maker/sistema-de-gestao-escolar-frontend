import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { getAlunoLista } from "./actions";

export default async function Alunos() {

  const alunos = await getAlunoLista();
  console.log(alunos);

  return (
    <>
      <Sidebar />
      <form className={styles.tudo}>
        <header className={styles.header}>
          <h1 className={styles.title}>Lista de Alunos</h1>
        </header>

        <div className={styles.informacoes}>
          <Button className={styles.buttons1}>Alberto</Button>
          <Button className={styles.buttons}>Betania</Button>
          <Button className={styles.buttons}>Clodoaldo</Button>
        </div>

        <div className={styles.button}>
          <Button variant="primary" type="submit">Salvar alterações</Button>
        </div>
      </form>
    </>
  )
}
