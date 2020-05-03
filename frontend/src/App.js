import React, {useState, useEffect} from 'react';
import api from '../services/api';

import './App.css';
import backgroundImage from '../assets/background.jpeg';

import Header from './components/Header';

function App(){
  const [projects, setProjects] = useState(['Dev de app', 'Frontend Web']);

  useEffect(()=>{
    api.get('/projects').then(response=>{
      console.log(response)
    })
  }, [])

  function handleAddProject(){
    // conceitos de estado e Imutabilidade

   // projects.push(`Novo Projeto ${Date.now()}`)  
    setProjects([...projects, `Novo Projeto ${Date.now()}`])
   console.log(projects)
  }

  return (
   <>  
      <Header title="Homepage"/>
      <img width={300} src={backgroundImage}></img>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>    
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
   </>
  );
}
export default App;