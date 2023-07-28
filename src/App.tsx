
import { useState } from 'react';
import Formulario from './componentes/Formulario'
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Banner from './componentes/Banner'
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome:  'Programacao',
      corPr: '#57c278',
      corSec:'#d9f7e9'
    },
    {
      nome:  'Front-End',
      corPr: '#82cffa',
      corSec:'#e8f8ff'
    },
    {
      nome:  'Data Science',
      corPr: '#a6d157',
      corSec:'#f0f8e2'
    },
    {
      nome:  'Devops',
      corPr: '#e06869',
      corSec:'#fde7e8'
    },
    {
      nome:  'UX e Design',
      corPr: '#db6ebf',
      corSec:'#fae9f5'
    },
    {
      nome:  'Mobile',
      corPr: '#ffba05',
      corSec:'#fff5d9'
    },
    {
      nome:  'Inovação e Gestão',
      corPr: '#ff8829',
      corSec:'#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaborador = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador ])
  }

  return (
    <div 
    className="App">

      <Banner 
          enderecoImagem='./imagens/banner.png'
      />

      <Formulario 
      times={times.map(time => time.nome)} 
      obrigatorio
      aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} />

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPr={time.corPr} 
        corSec={time.corSec}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
      />)}

      <Rodape />

    </div>
  );
}

export default App;
