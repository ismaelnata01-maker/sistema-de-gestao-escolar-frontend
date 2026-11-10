"use server";

import { cookies } from "next/headers";

export async function getCursoLista() {
    const cookieStore = await cookies();
    const token = cookieStore.get("@gestao-escolar/token")?.value;

    if (!token){
        return "Erro: Token não encontrado";

    }

    let response: Response;

    try{
        response = await fetch(`${process.env.API_URL}/cursos`,{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
            next: { tags: ["pegarListaCursos"] }
        })
    } catch(e){
        console.error(e);
        return "Falha na requisição";
    }

    const data = await response.json();
    return data;
}