import { useDispatch, useSelector } from 'react-redux'; // lấy dự liệu từ redux, mang action
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Public } from './containers/public';
import path from './ultis/path';
import { useEffect } from 'react';
import * as actions from './store/actions'




function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])


  return (
    <>
      <div className=''>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
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
