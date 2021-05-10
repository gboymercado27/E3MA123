import Header from './Component/Header'
import NavItem from './Component/NavItem'
import Footer from './Component/Footer'
import Main from './Component/Main'
import Photos from './Component/Photos';

function App() {
  return (
    <div className = "container">
      
      <Header title = "Garage For You!!" />
      
      <NavItem navText = "Home" navItem="1" />
      <NavItem navText = "Get Started" navItem="2" />
      <NavItem navText = "Photos" navItem="3" />
      <NavItem navText = "Gear" navItem="4" />
      <NavItem navText = "Forum" navItem="5" />
      
      <Main title = "WELCOME"
      paragraph1 = "Most expensive cars in the world"
      list1 = "Zenvo ST1"
      list2 = "Bugatti La Voiture Noiren"
      list3 = "Mercedez-Benz Biome"
      list4 = "Ferrari laferrari"
      />

      <Photos title1 = "Most Expensive Cars in the World"/>

      <Footer text = "©This is Fake Website" />
    </div>
  );
}

export default App;