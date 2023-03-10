import './App.css';
import {useState, useEffect} from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "https://localhost:5000"

function App() {
  const [title, setTittle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false
    }
    
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTittle("")
    setTime("")
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='form-todo'>
        <h2>Insira a sua proxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>O que vc vai fazer?</label>
            <input
            type="text"
            name="title"
            placeholder='Titula da Tarefa'
            onChange={(e) => setTittle(e.target.value)}
            value={title || ""}
            required
            />
          </div>
          <div className='form-control'>
            <label htmlFor='time'>Duracao:</label>
            <input
            type="text"
            name="time"
            placeholder='Tempo estimado (em horas)'
            onChange={(e) => setTime(e.target.value)}
            value={time || ""}
            required
            />
          </div>
          <input type="submit" value="Criar Tarefa"></input>
        </form>
      </div>
      <div className='list-todo'>
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Nao ha tarefas!</p>} 
      </div>
    </div>
  );
}

export default App;
