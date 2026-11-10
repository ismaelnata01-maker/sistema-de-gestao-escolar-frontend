import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { getCursoLista } from "./actions";

export default async function Cursos() {

  const cursos = await getCursoLista();
  console.log(cursos);

  return (
    <>
      <Sidebar />
      <form className={styles.tudo}>
        <header className={styles.header}>
          <h1 className={styles.title}>Lista de Cursos</h1>
        </header>

        <div className={styles.informacoes}>
          <Button className={styles.buttons1}>Des. de sistemas</Button>
          <Button className={styles.buttons}>Des. de sistemas</Button>
          <Button className={styles.buttons}>Des. de sistemas</Button>
        </div>

        <div className={styles.button}>
          <Button variant="primary" type="submit">Salvar alterações</Button>
        </div>
      </form>
    </>
  )
}