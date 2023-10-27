import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

  
// );

const Root = () => { 
  return <App />
}

const root = document.getElementById('root');
ReactDOM.render(<Root />,root)