// import { useState } from 'react'
// import Footer from './components/footer'
// import Header from './components/header'
// import Section from './components/section'
// import './App.css'
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Photo from "./components/Photo";
import People from "./components/People";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Photo />
        <People />
      </main>
    </div>
  )

  // const [number, setNumber] = useState(0);
  // const [text, setText] = useState("Привет, мир!");
  // const [name, setName] = useState("")


  // const handleclick = () => {
  //   setNumber(number + 1);
  //   setText("я люблю блинчики");
  //   console.log(number);
  // }

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // }

  // const [name, setName] = useState("Ислам");

  // const handleclick = () => {
  //   console.log("Я лучший")
  // }

  // return (
  //   <div>
  //     <Header name={"Меня зовут: " + name + "!"} />
  //     <Section age={19} changeName={setName}/>
  //     <Footer isMarried={false} clickMe={handleclick}/>
  //   </div>
  // )
  // <div>
  //   <h1>{text}</h1>
  //   <p>Моё любимое число: {number}</p>
  //   <input  
  //   onChange={handleChange}
  //   type="text" 
  //   placeholder='Введите ваш текс' />
  //   <div>{name}</div>
  //   <br />
  //   <button onClick={handleclick}>Кнопка</button>
  // </div>
}
export default App

// пропсы