
import './App.css';
import Header from './components/Housing Product/Header';
import Section from './components/Basics/Section';
import Title from './components/Housing Product/Title';
import Product from './components/Housing Product/Products';
import { Wrapper } from './components/Housing Product/Wrapper';

function App() {
  let userInfo = {
    username: "rk",
    role : "student"
  }
  let address = {
    city:"delhi"
  }
  const caller = ()=>{
    console.log("func called");
    
  }
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    // </div>
    <>
    <Header/>
    <Title/>
    {/* <Product name = "Queen panel bed " type ="Household" ratings ="4" price ="2500" image = "#" available = {true}/>
    <Product name = "Dresser " type ="furniture" ratings ="3" price ="3200" image = "#" available = {false}/>
    <Product name = "Queen panel bed " type ="Household" ratings ="4" price ="2500" image = "#" available/> */}
    <wrapper obj = {userInfo} nums ={[1,2,3,4,5]} fun ={caller}/>
    </>
  );
}

export default App;
