import {useState} from "react";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";

function App() {
    const [toggle, setToggle] = useState(true);

  return (
      <div className="App">
          <Text toggle={toggle} displayText="GeeksForGeeks"/>
          <Button setToggle={setToggle} btnText="Toggle Text"/>
      </div>
  );
}

export default App;
