import React from 'react';
import { useState } from 'react'
import Head from './components/head';
import Foot from './components/footer';
import TodoList from './components/todo';
function App() {


  return (
    <div>

      {/* header section */}
      <Head></Head>

      {/* todo section */}
      <TodoList></TodoList>


      {/* footer section */}
      <Foot></Foot>
      </div>
  );
}

export default App;
