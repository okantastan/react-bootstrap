import { Carousel } from 'react-bootstrap';
import './App.css';
import Bootstrap from './Bootstrap'
import Header from './Header'
import CarouselSlider from './Carousel'
import Card from './Card';

function App() {


  
  return (
    <div className="App">

      <Header />

      <CarouselSlider />

      <Card />

      <Bootstrap />

    </div>
  );
}

export default App;
