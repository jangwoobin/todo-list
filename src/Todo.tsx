import { useEffect, useMemo, useRef, useState } from "react"
import TodoItem from "./Todoitem"

const Todo = () => {
    const [task, setTask] = useState<string>('')
    const [todoList, setTodoList] = useState<{
        id: number
        todo: string
        completed: boolean
    }[]>([])
    
    const nextId = useRef(0)

    const addTodo = (task: string) => {
        if(!task.trim()) {
            return
    }
        const newTodoList = todoList.concat({
            id: nextId.current,
            todo: task,
            completed: false
        })
        setTodoList(newTodoList)
        setTask('')

        nextId.current += 1
    }

    const removeTodo = (index: number) => {
        const newTodoList = todoList.filter((todo, _index) => {
            return index !== _index
        })

        setTodoList(newTodoList)
    }


    const completeTodo = (id: number) => {
        const newTodoList = todoList.map(todo => {
            if(todo.id == id) {
               return {
                    id: todo.id,
                    todo: todo.todo,
                    completed: !todo.completed
                }
            }

            return todo
        })

        setTodoList(newTodoList)
    }

    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    
    return (
        <>
            <h1>투두 앱앱</h1>   
            <input type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
                onKeyPress={e => {
                    if(e.key == 'Enter') {
                        addTodo(task)
                    }
                }}
                placeholder="할일 입력"
            />
            <button
                onClick={() => {
                    addTodo(task)
                }}
            >
                추가
            </button>
            <ul>
                {todoList.map((todo, index) => {
                    return (                 
                       <TodoItem key={index}
                           todo={todo}
                           completeTodo={completeTodo}
                           removeTodo={removeTodo}
                           index={index}
                           />
                        
                    )
                })}
            </ul>
        </>
    )
}

export default Todo


