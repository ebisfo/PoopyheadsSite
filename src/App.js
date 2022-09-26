import React from "react";
import styled from 'styled-components';

const Button = styled.button`
background-color: blue;
`

function clickMe() {
    alert('You clicked me!');
  }


  export default function App () {
  return (
    <div>
    {/* <button onClick= {clickMe}>
      Click Here to mint your Poopyhead!.
    </button> */}
  </div>
   
  
  );
}

