import TourList from "./TourList";
import  {tours} from "./toursData";
import "./App.css";

function App() {
  return (
    <main>
      <TourList tours ={tours}></TourList>
    </main>
  );
}
export default App;