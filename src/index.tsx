import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button, ButtonChildre } from './components/Button';

import './services/firebase'

import './styles/Global.scss'

//DOM Document Objet Model
//HTML dentro do JS chama JSX 
ReactDOM.render(
  <React.StrictMode>
    {/* <Button text='Clique' />
    <br />
    <ButtonChildre> outro Clique</ButtonChildre>
    <br />
    <Button /> */}

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
