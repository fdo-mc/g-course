import Table from './components/Table'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Prueba Técnica</h1>
        <section className='actions'>
          <button>Colorear</button>
          <button>Ordenar</button>
          <button>Resetear</button>
          <input type="text" placeholder='Filtra por país' />
        </section>
        <Table />
      </header>
    </>
  )
}

export default App
