
interface props {
    todo: {
        id: number
        todo: string
        completed: boolean
    }
    completeTodo: (id: number) => void
    removeTodo: (index: number) => void
    index: number
}

const TodoItem = (props: props) => {
    return (
    <li>
        <span
        style={{
            cursor: 'pointer',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }}
         onClick={() => props.completeTodo(props.todo.id)}
        >{props.todo.todo}</span>
        <button
        onClick={() => props.removeTodo(props.index) }
        >
            삭제</button>
        </li>
    )
}

export default TodoItem

















