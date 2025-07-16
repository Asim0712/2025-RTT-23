// import { useState } from 'react';

import CharacterCounter from "./components/CharacterCounter/CharacterCounter";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";
import TextInput from "./components/TextInput/TextInput";

function App() {

  return (
    <>
      <h1> Character Component</h1>
      <CharacterCounter />
      <StatsDisplay  />
    
    
     <TextInput 
        onTextChange={(text) => console.log(text)}
        placeholder="Type your text here..."  
        initialValue="Hello, world!">
          </TextInput>
    </>
  )
}

export default App;


