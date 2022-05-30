
import './App.css';
import {useEffect, useState} from 'react';

// const PAGE_NUMBER = 1;

function App() {
  const[state, setState] = useState([])
  const[page, setPage] = useState(1)
   
  useEffect(() => {
   
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`) 
    
    .then(res =>res.json())

    .then(json => setState ([...state, ...json.data]))
  },[page]);

  const scrollToEnd =() =>{
    setPage(page + 1)
  }

window.onscroll = function (){

  if(
    window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
  ){
    scrollToEnd()
  }
}

  return (
    <div className="App">
       
       {state.length>0 && state.map((el, i ) =>

         <div key={i} className={'container'}>
           {/* <h4>Id: {el.id}</h4> */}
           <h4>Id: {el.name}</h4>
           <h4>Id: {el.trips}</h4>
          9 {/* <h4>Id: {el.image}</h4> */}


         </div>
       )
       
       
       
       }
    </div>
  );
}

export default App;
