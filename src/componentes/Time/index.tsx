import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    corPr: string
    corSec: string
    nome: string
    colaboradores: IColaborador []
}

const Time = ({corPr, corSec, colaboradores, nome} : TimeProps) => {

    const css = { backgroundColor: corSec }
    return (

        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 
                style={{ borderColor: corPr }}>{nome}
            </h3>
            <div 
            className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador 
                        corDeFundo={corPr} 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section>
            : ''
    )
}



export default Time