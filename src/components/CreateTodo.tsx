import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
     <form onSubmit={handleSubmit}>
        <input
        className='new-todo'
        value={inputValue}
        onChange={(evt) => { setInputValue(evt.target.value) }}
        onKeyDown={() => {}}
        placeholder='¿Qué quieres hacer?'
        autoFocus
        />
     </form>
  )
}
