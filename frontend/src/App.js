import React, {useState, useEffect} from 'react';
import api from '../services/api';

import './App.css';
import backgroundImage from '../assets/background.jpeg';

import Header from './components/Header';

function App(){
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    api.get('/projects').then(response=>{
      setProjects(response.data)
      console.log(response)
    })
  }, [])

  async function handleAddProject(){
    // conceitos de estado e Imutabilidade

   // projects.push(`Novo Projeto ${Date.now()}`)  
   // setProjects([...projects, `Novo Projeto ${Date.now()}`])
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Lucas Reis"
    });

    const project = response.data;

    setProjects([...projects, project]);

   console.log(projects)
  }

  return (
   <>  
      <Header title="Homepage"/>
      <img width={300} src={backgroundImage}></img>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>    
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
   </>
  );
}
export default App;