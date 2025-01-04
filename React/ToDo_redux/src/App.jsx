import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, update, edit, editname } from './store/reducers/TaskSlice';

const App = () => {
  const [taskName, setNewTask] = useState('');
  const [editText, setEditText] = useState('');
  
  const { tasks } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const updateTask = (id) => {
    dispatch(update(id));
  };

  const editTask = (id) => {
    dispatch(edit(id));
    setEditText(tasks[id].name);
  };

  const editHandler = (e, id) => {
    e.preventDefault();
    if (editText.trim()) {
      dispatch(editname({ id, editText }));
      setEditText('');
    }
  };

  const deleteTask = (id) => {
    dispatch(remove(id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(add({
        name: taskName,
        done: false,
        edit: false
      }));
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center flex-col justify-start p-10">
      <form
        className="flex flex-col items-center"
        onSubmit={submitHandler}
      >
        <input 
          type="text" 
          placeholder="Enter your Task..." 
          value={taskName}
          onChange={(e) => setNewTask(e.target.value)}
          className="bg-slate-700 outline-none py-2 w-96 px-5 rounded text-gray-100"
        />
        <button 
          type="submit"
          className="w-1/2 bg-gray-200 mt-5 py-2 rounded active:scale-95 duration-100 font-semibold"
        >
          Add Task
        </button>
      </form>

      <div className="mt-10 w-[40rem] h-[40rem]  overflow-scroll scrollbar py-2 rounded px-4 bg-slate-900 text-2xl font-medium text-gray-100">
        {tasks.map((task, index) => (
          <div key={index} >
            <form onSubmit={(e) => editHandler(e, index)} className="flex my-5 rounded justify-between px-2 py-2 items-center bg-slate-800">
              {task.edit ? (
                <input
                  type="text"
                  placeholder="Edit task..."
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-slate-700 outline-none py-2 w-96 px-5 rounded text-gray-100"
                />
              ) : (
                <h1>{task.name}</h1>
              )}
              
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`text-lg px-2 py-1 rounded active:scale-95 ${
                    task.edit ? 'bg-green-600' : 'bg-slate-950'
                  }`}
                  onClick={() => editTask(index)}
                >
                  {task.edit ? 'Save' : 'Edit'}
                </button>
                <button
                  type="button"
                  className={`text-lg px-2 py-1 rounded active:scale-95 ${
                    task.done ? 'bg-green-600' : 'bg-slate-950'
                  }`}
                  onClick={() => updateTask(index)}
                >
                  {task.done ? 'Done' : 'Pending'}
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-lg px-2 py-1 rounded active:scale-95"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;