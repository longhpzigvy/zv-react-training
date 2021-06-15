import Header from "./components/Header/index";
import Hotel from "./components/Hotel/index";
import Views from "./components/Views";
import Experience from "./components/Experience/index";
import Host from "./components/Host";
import Footer from "./components/Footer/index";
import Location from "./components/Location/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Location />
      <Hotel />
      <Views />
      <Experience />
      <Host />
      <Footer/>
    </div>
  );
}

export default App;
