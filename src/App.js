import "./App.css";
import {Container, Flex } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Container >
        {/* <LineChart /> */}
        <Flex>
          <Navbar/>
          <Main/>
        </Flex>
      </Container>
    </div>
  );
}

// export const baseUrl = "http://localhost:8080"
export const baseUrl = "https://crop-case-backend.onrender.com"

export default App;
