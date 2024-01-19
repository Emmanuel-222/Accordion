import { useState } from 'react';

import data from './components/Data';
import './App.css';
import AccordionItem from './components/AccordionItem/AccordionItem';

const App = () => {
  const [selected, setSelected] = useState(null);


  return (
   <div className="wrapper">
    <div className="accordion">
      {
        data.map((item, i) => {
          return (
            <AccordionItem key={i} 
              item={item} index={i} 
              selectedItem={selected}
              onSelectedItem={setSelected}
            />
          )
        })
      }
    </div>
   </div>
  )
}

export default App;