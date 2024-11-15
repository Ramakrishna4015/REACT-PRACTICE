
import './App.css';
import Header from './components/Housing Product/Header';
import Section from './components/Basics/Section';
import Title from './components/Housing Product/Title';
import Product from './components/Housing Product/Products';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //   </header>
    // </div>
    <>
    <Header/>
    <Title/>
    <Product name = "Queen panel bed " type ="Household" ratings ="4" price ="2500" image = "#"/>
    <Product name = "Dresser " type ="furniture" ratings ="3" price ="3200" image = "#"/>
    </>
  );
}

export default App;
