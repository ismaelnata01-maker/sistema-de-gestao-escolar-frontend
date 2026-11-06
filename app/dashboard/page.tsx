import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

export default function Login(){
  return(
    <>
      <Sidebar />
      <div className={styles.tudo}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bem vindo</h1>
        </header>
        <img className={styles.corvo} src="corvo.png" alt="Corvo" />
        

      </div>
    </>
)}