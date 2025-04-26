import { dummydata } from "./data/todos"



function App() {

  return (
    <main className='p-10 align-baseline'>
      <h1 className="text-lg">Your todos</h1>
      <div className="p-2 ">
        {dummydata.map(todo => (
            <p key={todo.id}>
              {todo.content}
            </p>
        ))}
      </div>
    </main>
  )
}

export default App
