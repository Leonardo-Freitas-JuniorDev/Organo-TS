import './Colaborador.css'

interface ColaboradorProps {
    nome: string
    cargo: string
    corDeFundo: string
    imagem: string
}

const Colaborador = ({ nome, imagem, cargo, corDeFundo }: ColaboradorProps) => {
    return (
        <div
            className='colaborador'
        >

            <div 
            style={{backgroundColor:corDeFundo}} 
            className='cabecalho'>
                <img src={imagem} />
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador