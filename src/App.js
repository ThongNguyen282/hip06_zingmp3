import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setWork] = useState('');
  const [todos, setTodos] = useState([
    { id: "congviec10", job: "chao" },
    { id: "congviec12", job: "3333333" },
  ]);

  const hanleAdd = () => {
    if (todos?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.warn('Công việc đã được thêm vào');
      return
    }
    setTodos(prev => [...prev, { id: work.replace(/\s/g, ''), job: work }]);// callback , 1 biến , 1 hàm có giá trị (có return)
    setWork('');

  }
  // console.log(todos);

  const handleDeleteJob = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id)) // callback f trả ra các giá trị khác với điều kiện
  }
  return (
    <>
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
                <li key={item.id} className='flex gap-10 items-center'>
                  <span className='py-2' >{item.job}</span>
                  <span className='py-2 cursor-pointer p-2' onClick={() => { handleDeleteJob(item.id) }} >X</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
