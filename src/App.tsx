import TodoItem from "./components/TodoItem"
import { dummydata } from "./data/todos"



function App() {

  return (
    <main className='flex flex-col justify-center items-center w-screen h-screen bg-amber-100'>
      <h1 className="text-lg">Your todos</h1>
      <div>
        {dummydata.map((todo) =>(
          <TodoItem todo={todo} />
        ))}
      </div>
    </main>
  )
}

export default App
