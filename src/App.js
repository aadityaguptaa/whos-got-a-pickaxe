import React from "react";
import backgroundImage from "./background.png";
import ServerManager from "./ServerManager";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    display:"flex"
  };


  return (
    <ChakraProvider>
      <div className="App" style={styles}>
        <ServerManager />
      </div>
    </ChakraProvider>
  );
};

export default App;
