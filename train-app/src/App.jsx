import './App.css';
import Card from './assets/components/Card';
import TrainListPage from './assets/components/TrainListPage';
// import SingleTrainPage from './assets/components/SingleTrainPage';

const handleClick = () => {
  window.location.reload();
}

function App() {
  return (
    <div className=''>
      <div className='w-[100vw] bg-gray-600 p-10 py-6 flex justify-between'>
        <p className='text-white text-xl font-bold'>Train Application</p>
        <p className='text-white text-xl cursor-pointer' onClick={handleClick}>Refresh</p>
      </div>
      <div className='mt-4 p-10 py-6'>
        <TrainListPage />
      </div>
      {/* <Card /> */}
    </div>
  );
}

export default App;