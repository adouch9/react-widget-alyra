import Header from "./compenents/Header"
import Footer from "./compenents/Footer"
import WidgetApp from './compenents/WidgetApp';
import { useEffect,useState } from "react";





function App() {

  let [fonts,setFonts] = useState([])

  useEffect(() => {

  fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBtq1rh-TfquhiO7Wfp9rivFNkbBFr990U')
  .then((response) => {
    if(!response.ok) {
      throw new Error("api request failed")
      console.log(response.ok)
    }
    return response.json()
  })
  .then((data) => {
    // console.log(data)
    setFonts(fonts => [...fonts,data.results])

  })
  .catch((error) => {
    alert(error.message)
  })
    
    return () => {
      
    }
  }, [])
 
  console.log(fonts)

  return (
    <div className="App">
      <Header />
      <WidgetApp fonts={fonts} />
      <Footer />
    </div>
  );
}

export default App;