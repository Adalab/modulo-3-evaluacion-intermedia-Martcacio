import React, { useState } from 'react';
import PokeList from './PokeList.js';
import data from '../data/data.json'


function App() {

  return(
  <PokeList data={data}/>
  );

  }


export default App;