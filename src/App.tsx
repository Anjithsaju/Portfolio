import Starwars from "./Components/Starwars";
import { TorchProvider } from "./Components/TorchContext";

function App() {
  return (
    
    <TorchProvider>
      <>
        {/* <Theone></Theone> */}
        {/* <Dino></Dino> */}
        <Starwars></Starwars>
        {/* <Intro></Intro> */}
        {/* <Works></Works> */}
      </>
    </TorchProvider>
  );
}

export default App;
