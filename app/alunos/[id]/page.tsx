import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { getAlunoData, editAlunoData } from "./actions";
import Input from "@/components/Input";

interface Props {
  params: Promise<{ id: string }>
}

export default async function Perfil({params}: Props) {
  const { id } = await params
  const aluno = await getAlunoData(+id);
  console.log(aluno)

  const editAction = editAlunoData.bind(null, aluno?.id);

  if(!aluno) {
    return <></>
  }

  return (
    <>
      <Sidebar />
      <form action={editAction} className={styles.tudo}>
        <header className={styles.header}>
          <h1 className={styles.title}>Aluno {id}</h1>
        </header>

        <div className={styles.informacoes}>
          <Input label="matrículas" type="text" defaultValue={aluno?.cargo} name="matricula" />
          <Input label="cpf" type="text" defaultValue={aluno?.cpf} name="cpf" />
          <Input label="nome" type="text" defaultValue={aluno.nome} name="nome" />
          <Input label="cursos" type="text" defaultValue={aluno.nascimento} name="cursos" />
          <Input label="nascimento" type="text" defaultValue={aluno.email} name="nascimento" />
          <Input label="email" type="email" defaultValue={aluno.senha} name="email" />
          <Input label="telefone" type="text" defaultValue={aluno.telefone} name="telefone" />
          <Input label="endereço" type="text" defaultValue={aluno.endereco} name="endereco" />
        </div>

        <div className={styles.button}>
          <Button variant="primary" type="submit">Salvar alterações</Button>
        </div>
      </form>
    </>
  )
}