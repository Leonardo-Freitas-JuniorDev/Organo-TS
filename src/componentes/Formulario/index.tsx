import { useState } from "react"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import Botao from "../Botao"
import { IColaborador } from "../../compartilhado/interfaces/IColaborador"

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    obrigatorio: boolean
    times: string []
}

const Formulario = (props: FormularioProps) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, seTime] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time,
        })
        setNome('')
        setCargo('')
        seTime('')
        setImagem('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite seu nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                        label="Nome" 
                    />
                <CampoTexto
                        obrigatorio={true} 
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)} 
                        label="Cargo" 
                    />
                <CampoTexto 
                        placeholder="Digite o endereço da imagem" 
                        label="Imagem" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                        obrigatorio={true}
                    />
                <ListaSuspensa
                        label="Time" 
                        obrigatorio={true}
                        itens={props.times} 
                        valor={time}
                        aoAlterado={valor => seTime(valor)}
                    />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario