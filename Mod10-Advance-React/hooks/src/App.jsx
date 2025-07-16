import { useEffect } from "react" 
import useDocumentTitle from "./hooks/useDocumentTitle" 
import useWindowSize from "./hooks/useWindowsize"



function App() {
useDocumentTitle("LAnding Page| ACHME Compant")
const size = useWindowSize();
console.log(size)
  return (
    <>
     <h1>Custom Hooks</h1> 
 
    </>
  )
}

export default App
