import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header style={{ marginBottom: '20px' }} className="header">
            <h1>ToDo
            <img style={{ marginLeft: '30px', width: '60px', height: 'auto' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <span style={{ color: 'black', marginLeft: '5px', marginRight: '5px' }}>+</span>
              <img style={{ width: '60px', height: 'auto' }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' />

            </h1>

            <CreateTodo saveTodo={onAddTodo} />
        </header>
  )
}
