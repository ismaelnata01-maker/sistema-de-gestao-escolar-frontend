import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Perfil(){
    return(
    <div className={styles.tudo}>
      <header className={styles.header}>
        <Sidebar />
        <h1 className={styles.title}>Perfil</h1>
      </header>

      <div className={styles.informacoes}></div>

      <Button className={styles.button} variant="primary">Entrar</Button>

    </div>
)}