import React, { useContext } from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days'
import { TodoContext } from '../context';


const Todos = () => {
  const {todos,selectedProject} = useContext(TodoContext);
  //  const todos = [
  //   {
  //     id:'d54sd4',
  //     text:"Go for a run",
  //     time:"10:00:00 AM ",
  //     date:"06/03/2024",
  //     day:"6",
  //     checked:true,
  //     color:"#00ff00",
  //     project:'personal'
  //   },
  //   {
  //     id:'d54fdf',
  //     text:"Meeting",
  //     time:"09:00:00 AM ",
  //     date:"08/03/2024",
  //     day:"1",
  //     checked:false,
  //     color:"#00ff00",
  //     project:'work'
  //   }
  // ]
  return (
    <div className='Todos'>
      
      <div className="selected-project">
        {selectedProject}
      </div>
      <div className="todos">
        {
          selectedProject === "next 7 days" ?
          <Next7Days todos={todos}/>
          :
          todos.map(todo => 
            <Todo todo={todo} key={todo.id} />
          )
        }
      </div>
    </div>
  )
}

export default Todos
