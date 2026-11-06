import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { getFuncionarioData, editFuncionarioData } from "./actions";
import Input from "@/components/Input";

export default async function Perfil() {

  const funcionario = await getFuncionarioData();

  const editAction = editFuncionarioData.bind(null, funcionario.id);

  return (
    <>
      <Sidebar />
      <form action={editAction} className={styles.tudo}>
        <header className={styles.header}>
          <h1 className={styles.title}>Perfil</h1>
        </header>

        <div className={styles.informacoes}>
          <Input label="Cargo" type="text" required defaultValue={funcionario.cargo} name="cargo" />
          <Input label="cpf" type="text" required defaultValue={funcionario.cpf} name="cpf" />
          <Input label="nome" type="text" defaultValue={funcionario.nome} name="nome" />
          <Input label="nascimento" type="text" defaultValue={funcionario.nascimento} name="nascimento" />
          <Input label="email" type="email" required defaultValue={funcionario.email} name="email" />
          <Input label="telefone" type="text" defaultValue={funcionario.telefone} name="telefone" />
          <Input label="endereço" type="text" defaultValue={funcionario.endereco} name="endereco" />
          <Input label="senha" type="password" required defaultValue={funcionario.senha} name="senha" />
        </div>

        <div className={styles.button}>
          <Button variant="primary" type="submit">Salvar alterações</Button>
        </div>
      </form>
    </>
  )
}