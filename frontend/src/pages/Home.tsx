import React from "react";
import '../styles/button.scss'
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.png";
import { Button } from '../components/Button';
import '../App.scss'
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Emitir nota fiscal eletrônica (NFS-e)</strong>
                <p>pode ser simples e prático.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />

                    <form>
                        <input
                            type="text"
                            placeholder="Digite seu usuário"

                        />
                        <input
                            style={{ marginTop: '15px' }}
                            type="password"
                            placeholder="Digite sua senha"

                        />
                        <Link to="/emitir-nota">
                        <Button type="submit">Entrar</Button></Link>
                        
                        <div className="separator">Criar conta</div>
                    </form>
                </div>
            </main>
        </div>
    )
}