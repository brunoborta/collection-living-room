import { OrbitControls, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export default function Experience() {
  const kallax4x4 = useGLTF("/assets/models/kallax-4x4.glb");
  const kallax5x5 = useGLTF("/assets/models/kallax-5x5.glb");

  return (
    <>
      <color attach="background" args={["#4e4e4e"]} />
      <Perf position="top-left" />
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} />
      <group scale={1.4}>
        <primitive object={kallax4x4.scene} />
        <primitive object={kallax5x5.scene} position={[1.65, 0, 0]} />
      </group>
    </>
  );
}
