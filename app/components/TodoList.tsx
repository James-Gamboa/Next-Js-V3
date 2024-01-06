//@ts-nocheck

import Todo from "./Todo"

const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map(todos =>(
        <Todo todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}

export default TodoList