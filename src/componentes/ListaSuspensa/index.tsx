import './ListaSuspensa.css'

interface ListaSusProps {
    label: string
    aoAlterado: (valor:string) => void
    obrigatorio: boolean
    valor:string
    itens: string []
}

const ListaSuspensa = (props: ListaSusProps) => {
    return (
        <div className='lista__suspensa'>
            <label>{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}>
                <option
                    value="">
                </option>

                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa