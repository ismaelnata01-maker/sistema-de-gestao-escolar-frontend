import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { getAlunoLista } from "./actions";
import Link from "next/link";

interface Aluno {
  id: number;
  cpf: string;
  nome: string;
  cursos: string;
  nascimento: string;
  email: string;
  telefone: number;
  endereco: string;
}

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
          {alunos.map((aluno: Aluno) => {
            return (
              <Link href={`/alunos/${aluno.id}`}><Button className={styles.buttons1}>{aluno.nome}</Button></Link>
            )
          })}
        </div>

        <div className={styles.button}>
          <Button variant="primary" type="submit">Salvar alterações</Button>
        </div>
      </form>
    </>
  )
}
