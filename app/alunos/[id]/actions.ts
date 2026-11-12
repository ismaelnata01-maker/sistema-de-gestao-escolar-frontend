"use server";

import { jwtVerify } from "jose";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAlunoData(id: number){
    const cookieStore = await cookies();
    const token = cookieStore.get("@gestao-escolar/token")?.value;

    if(!token) {
        return "Erro: Token não encontrado";
    }

    let response: Response;
    try{
        response = await fetch(`${process.env.API_URL}/alunos/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            next: {tags:["pegarDadosAluno"]},
        })
    }
    catch(e){
        console.error(e);
        return "Falha na requisição";
    }

    if(response.status === 401){
        redirect("/");
    }

    const data = await response.json();
    return data;
}

export async function editAlunoData( id: number, formData: FormData) {
    const matriculas = formData.get("matriculas");
    const cpf = formData.get("cpf");
    const nome = formData.get("nome");
    const cursos = formData.get("cursos");
    const nascimento = formData.get("nascimento");
    const email = formData.get("email");
    const telefone = formData.get("telefone");
    const endereco = formData.get("endereco");

    const cookieStore = await cookies();
    const token = cookieStore.get("@gestao-escolar/token")?.value;

    
    if(!token){
        return "Erro: Token não encontrado";
    }

    let response: Response;
    try{
        response = await fetch(`${process.env.API_URL}/alunos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                matriculas,
                cpf,
                nome,
                cursos,
                nascimento,
                email,
                telefone: telefone ? +telefone : undefined,
                endereco,
            })
        })
    }catch(e){
        console.error(e);
        return "Falha na requisição"
    }

    if(response.status === 401){
        redirect("/");
    }

    if(response.status === 200){
        revalidateTag("pegarDadosAlunos", "max");
        redirect("/perfil");
    }

    const data = await response.json();
    return data;
}