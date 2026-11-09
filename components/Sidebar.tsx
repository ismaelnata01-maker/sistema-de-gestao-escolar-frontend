"use client";

import { House } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import Button from "./Button";

export default function Sidebar() {
  const [aberto, setAberto] = useState(false);

  // Bloqueia a rolagem enquanto a Sidebar estiver aberta
  useEffect(() => {
    if (aberto) {
      const scrollAnterior = document.body.style.overflow;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = scrollAnterior;
      };
    }
  }, [aberto]);

  return (
    <>
      {/* Efeito Glass */}
      {aberto && (
        <button
          type="button"
          className={styles.glass}
          onClick={() => setAberto(false)}
          aria-label="Fechar menu"
        />
      )}

      {/* Barra lateral */}
      <aside className={styles.Sidebar}>
        <Button
          type="button"
          onClick={() => setAberto((oldState) => !oldState)}
        >
          {aberto ? "✕" : "☰"}
        </Button>

        <div className={styles.button_close}>
          <button type="button" className={styles.house}>
            <House />
          </button>
        </div>

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
    </>
  );
}