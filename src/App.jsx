import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        near: 0.1,
        far: 10,
        position: [4, 2, 3],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
