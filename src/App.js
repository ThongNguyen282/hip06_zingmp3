import { useState } from 'react';
import './App.css';

function App() {
  const [work, setWork] = useState('');
  const [todos, setTodos] = useState([]);

  const hanleAdd = () => {
    setTodos(prev => [...prev, work]);// callback , 1 biến , 1 hàm có giá trị (có return)
    setWork('');
  }

  return (
    <div className="flex flex-col gap-8 h-screen items-center border border-red-500 justify-center">
      <div className="flex gap-8">
        <input type="text"
          className='outline-none border border-blue-600 px-4 py-2  w-[400px]'
          value={work}
          onChange={(e) => { setWork(e.target.value) }}
        />
        <button type="button"
          className='outline-none px-4 py-2 bg-blue-500 rounded-md text-white'
          onClick={hanleAdd}
        >
          Add
        </button>
      </div>
      <div className="">
        <h3 className="font-bold text-xl">
          Content:
        </h3>
        <ul>
          {todos?.map((item) => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
