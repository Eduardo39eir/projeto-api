
// Hooks useEffect e useState
import { useState, useEffect } from "react"

function App() {
  // Crie duas const para guardar e carregar tarefas..
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  // useEffect com fetch (requisições assíncronas)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then((response) => response.json())
      .then((dados) => {
        setTarefas(dados) // Salva os dados vindos da API no estado
        setCarregando(false) // Desativa a mensagem carregando
      })
  }, []) // Array vazio para executar apenas uma vez ao abrir a tela

  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white p-4 text-center rounded-top">
          <h2 className="mb-1 text-white">Tarefas vindas da API</h2>
          <p className="mb-0 text-white-50">Consumindo dados de JSONPlaceholder via fetch e useEffect</p>
        </div>
        <div className="card-body p-4">
          {carregando ? (
            <div className="text-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
              <p className="mt-2 text-muted">Carregando tarefas...</p>
            </div>
          ) : (
            <ul className="list-group list-group-flush">
              {tarefas.map((item) => (
                <li 
                  key={item.id} 
                  className="list-group-item d-flex justify-content-between align-items-center py-3 px-3 fs-6"
                >
                  <span className="fw-medium text-capitalize">{item.title}</span>
                  {item.completed ? (
                    <span className="badge bg-success rounded-pill px-3 py-2">Concluído</span>
                  ) : (
                    <span className="badge bg-warning text-dark rounded-pill px-3 py-2">Pendente</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App