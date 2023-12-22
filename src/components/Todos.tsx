import { type Todo as TodoType, type ListOfTodos } from '../types'
import { useState } from 'react'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: (id: string) => void
  setTitle: (params: Omit<TodoType, 'completed'>) => void
  removeTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onToggleCompleteTodo, setTitle, removeTodo }) => {
  const [isEditing, setIsEditing] = useState('')

  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li
                key={todo.id}
                onDoubleClick={() => { setIsEditing(todo.id) }}
                className={`
                ${todo.completed ? 'completed' : ''}
                ${isEditing === todo.id ? 'editing' : ''}
                `}>
                   <Todo
                   key={todo.id}
                   id={todo.id}
                   title={todo.title}
                   completed={todo.completed}
                   setTitle={setTitle}
                   onToggleCompleteTodo={onToggleCompleteTodo}
                   isEditing={isEditing}
                   setIsEditing={setIsEditing}
                   removeTodo={removeTodo}
                   />
                </li>
            ))}
        </ul>
  )
}
