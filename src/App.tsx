import { IoHome, IoHeart } from "react-icons/io5";
import { Tabs } from "./components/Tabs/Tabs";

import "./App.css";

function App() {
  function goToHome() {
    console.log('Ir al home');
  }

  function goToFavorites() {
    console.log('Ir al favorites');
  }


  return (
    <div>
      <Tabs
        items={[
          { id: 'home', label: <IoHome className="h-6 w-6" />, callback: goToHome },
          { id: 'favorite', label: <IoHeart className="h-6 w-6" />, callback: goToFavorites },
        ]}
      />
    </div>
  );
}

export default App;
