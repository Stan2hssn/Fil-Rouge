import "./three.scss";
import { Suspense, React, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {PerspectiveCamera, useAnimations, useGLTF,} from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/First_section_About.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Animation.play();
  });

  materials["Material.001"].metalness = 0.2;
  materials["Material.001"].roughnessness = 1;
  materials["Material.001"].roughnessnessMap = 20;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={(0, 0, 0)}>
        <group
          name="Light"
          position={[4.18, 2.58, 2.48]}
          rotation={[1.86, 0.35, -1.15]}
        />
        <group
          name="Camera"
          position={[4.61, 2.9, -1]}
          rotation={[1.61, 0.05, -1.95]}
          scale={[0.49, 1, 0.53]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={30}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          name="Light001"
          position={[2.37, 5.07, -0.36]}
          rotation={[1.84, 0.7, -1.89]}
        />
        <group name="Point" position={[0, 0.86, 0]}>
          <pointLight
            name="Point_Orientation"
            intensity={1}
            decay={2}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          position={[0, -0.02, 0]}
          material={materials["Material.001"]}
          rotation={[0, 0, 0]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0.2]}
          rotation={[0, 0, -0.01]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Material.001"]}
          position={[0, 0, 0.4]}
          rotation={[0, 0, -1.91]}
          scale={[-0.06, -0.02, -0.06]}
        />
      </group>
    </group>
  );
}

export default function CanvasFirst({one, two}) {

  let none = "";

  if (two) {
    return null;
  }
  /*    console.log(Model)*/
  return (
    <Canvas id={"first"} className={none}  antialias="false">
      <Suspense className={none} fallback={null}>
        <ambientLight color="lightblue" intensity={0.4} />
        <pointLight color="lightblue" intensity={1.6} position={[0, 30, 0]} />
        <pointLight
          color="lightblue"
          intensity={0.9}
          position={[10, -10, 10]}
        />
        <Model antialiased="true" />
        <gridHelper />
      </Suspense>
    </Canvas>
  );
};

