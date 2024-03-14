import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './layouts/filter';
import Main from './layouts/main';

function App() {
  return (
    <div className='flex justify-center xl:items-center h-screen'>
      <div className='w-4/6 xl:flex xl:space-x-6'>
        <div className='xl:w-1/6 w-full'>
          <Filter />
        </div>
        <div className='xl:w-5/6 w-full'>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
