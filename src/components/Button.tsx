import { ButtonHTMLAttributes } from "react";

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
  )
}

<Button />

/* import { useState } from 'react';

type ButtonProps = {
  text?: string;
}
type ButtonChildren = {
  children?: string;
}
//let deixa a variavel mudar
//const é uma constante
export function ButtonChildre(props: ButtonChildren) {
  let counter = 0;
  function increment() {
    do {
      counter += 1;
      console.log(counter);
    } while (counter < 10);
  }
  return (
    <button onClick={increment}> {props.children || 'Padrão'}</button>
  )
}

export function Button(props: ButtonProps) {
  const [contador, setCounter] = useState(0)
  function incremento() {
    setCounter(contador + 1);
    console.log(contador);
  }
  return (
    <button onClick={incremento}> {props.text || 'Padrão'}</button>
  )
} */