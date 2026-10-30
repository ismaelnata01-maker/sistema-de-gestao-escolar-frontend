"use client";

import { House } from 'lucide-react';
import { useState } from "react";
import styles from "./Sidebar.module.css"
import Button from './Button';

export default function Sidebar() {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <aside className={styles.Sidebar}>
        <Button onClick={() => setAberto(oldState => !oldState)}>
          {aberto ? "✕" : "☰"}
        </Button>

         <House className={styles.house}/>

        {aberto ? (
          <div className={styles.button_open}>
            <Button>Alunos</Button>
            <Button>Funcionários</Button>
            <Button>Cursos</Button>
          </div>
        ) : (
          <div className={styles.button_close}>
            <Button>A</Button>
            <Button>F</Button>
            <Button>C</Button>
          </div>
        )}
      </aside>

      {aberto && <button className={styles.glass} onClick={() => setAberto(oldState => !oldState)}></button>}
    </div>
  )
}