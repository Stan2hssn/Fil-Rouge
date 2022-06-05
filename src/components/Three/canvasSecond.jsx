import "./three.scss";
import { React, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, useAnimations, useGLTF } from "@react-three/drei";

const GLTF = require("./Second_section_About.glb");

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(GLTF);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Animation.play();
  });

  materials["Material.001"].metalness = 0.1;
  materials["Material.001"].roughnessness = 0;
  materials["Material.001"].roughnessnessMap = 0;
  materials["Material.001"].diffuseMap = "texture_section/velvet_caracole.png";
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[1.85, 1.86, -1.79]}
          rotation={[1.64, 0.05, -2.57]}
          scale={[1, 1, 1]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={15.38}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Material.001"]}
          position={[0, 3.09, 0.2]}
          rotation={[0, 0, Math.PI]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials["Material.001"]}
          position={[0, 3.09, 0.4]}
          rotation={[0, 0, Math.PI]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials["Material.001"]}
          position={[0, 3.09, 0]}
          rotation={[0, 0, Math.PI]}
          scale={[-0.06, -0.02, -0.06]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Material.001"]}
          morphTargetDictionary={nodes.Plane.morphTargetDictionary}
          morphTargetInfluences={nodes.Plane.morphTargetInfluences}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={materials["Material.001"]}
          morphTargetDictionary={nodes.Plane007.morphTargetDictionary}
          morphTargetInfluences={nodes.Plane007.morphTargetInfluences}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials["Material.001"]}
          morphTargetDictionary={nodes.Plane008.morphTargetDictionary}
          morphTargetInfluences={nodes.Plane008.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload(GLTF);

const CanvasSecond = () => {
  /*    console.log(Model)*/
  return (
    <Canvas id={"second"} antialias="false">
      <Suspense fallback={null}>
        <ambientLight color="lightblue" intensity={0.5} />
        <Model antialiased="true" />
        <pointLight color="lightblue" intensity={1.6} position={[0, 30, 0]} />
        <pointLight
          color="lightblue"
          intensity={0.9}
          position={[10, -10, 10]}
        />
        <gridHelper />
      </Suspense>
    </Canvas>
  );
};

export default CanvasSecond;
