import { type Todo as TodoType } from '../types'
import { useEffect, useRef, useState } from 'react'

interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  setTitle: (params: { id: string, title: string }) => void
  setIsEditing: (completed: string) => void
  removeTodo: (id: string) => void
  isEditing: string
}

export const Todo: React.FC<Props> = ({ id, title, completed, onToggleCompleteTodo, setIsEditing, setTitle, removeTodo, isEditing }) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle })
      }

      if (editedTitle === '') removeTodo(id)
      setIsEditing('')
    }

    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  useEffect(() => {
    inputEditTitle.current?.focus()
  }, [isEditing])

  return (
    <>
        <div className="view">
            <input
            className="toggle"
            checked={completed}
            type="checkbox"
            onChange={handleChangeCheckbox}
            /* onChange={(event) => {
              onToggleCompleteTodo({ id, completed: event.target.checked })
            }} */
        />
        <label>{title}</label>
        <button
        className="destroy"
        onClick={() => {
          removeTodo(id)
        }}
        />
        </div>
        <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
      </>
  )
}
