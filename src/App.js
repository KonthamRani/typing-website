import TypingBox from "./Components/TypingBox";
import UpperMenu from "./Components/UpperMenu";
import { GlobalStyles } from "./Styles/global";


function App() {
  return (
    <div className="canvas">
      <GlobalStyles/>
      <div>Header</div>
      <UpperMenu/>
      <TypingBox/>
      <div>Footer</div>
    </div>
  );
}

export default App;
