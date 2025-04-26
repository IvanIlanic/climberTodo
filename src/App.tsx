import TodoItem from "./components/TodoItem"
import { dummydata } from "./data/todos"



function App() {

  return (
    <main className='p-10 align-middle'>
      <h1 className="text-lg">Your todos</h1>
      <div className="p-2 ">
        {dummydata.map((todo) =>(
          <TodoItem todo={todo} />
        ))}
      </div>
    </main>
  )
}

export default App
