import React, {useState} from 'react';
import {Numbers} from './components/Numbers';

export const App = () => {
  const [persons] = useState([
    {name:'yo1', number:'0801'},
    {name:'yo2', number:'0802'},
    {name:'yo3', number:'0803'},
    {name:'yo4', number:'0804'},
    {name:'yo5', number:'0805'}
  ]);

  return (
    <div>
      <Numbers persons={persons}></Numbers>
    </div>
  );
}

export default App;
