import { useSelector } from 'react-redux'; // lấy dự liệu từ redux, mang action
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { test } = useSelector(state => state.app);
  console.log(test);
  return (
    <>
      <div className=''>
        fasdf
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
