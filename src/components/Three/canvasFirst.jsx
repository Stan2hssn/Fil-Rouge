import "./three.scss"
import * as THREE from "three";
import {Suspense, React, useRef, useState, useEffect} from 'react';
import {Canvas, Camera, useFrame, useThree, } from "@react-three/fiber";
import {useGLTF, useAnimations, PerspectiveCamera, useTexture} from "@react-three/drei";
import {OrbitControls, three} from "three/examples/jsm/controls/OrbitControls"



function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/First_section_About.gltf')
    const { actions } = useAnimations(animations, group)
    const texture = useTexture({
        map: "/Texture/sbdkvup_4K_Albedo.jpg" ,
        displacementMap : "/Texture/sbdkvup_4K_Displacement.jpg",
        aoMap : "/Texture/sbdkvup_4K_AO.jpg",
        roughnessMap : "/Texture/sbdkvup_4K_Roughness.jpg",
        normalMap : "/Texture/sbdkvup_4K_Normal.jpg"
    });
    return (
        <group ref={group} {...props} dispose={null}>
                <group name="Camera" position={[4.610, 2.360, -0.80]} rotation={[1.610, -0.050, -1.95]} scale={[0.490, 1.380, 0.730]}>
                    <PerspectiveCamera name="Camera_Orientation" makeDefault={true} far={100} near={0.1} fov={40} rotation={[-Math.PI / 2, 0, 0]} />
                </group>
            <group name="Scene">

{/*
                <group name="Light001" position={[2.37, 5.07, -0.36]} rotation={[1.84, 0.7, -1.89]} />
*/}
                <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.001']} rotation={[0, 0, -1.88]} scale={[-0.06, -0.02, -0.06]} />
                <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.001']} position={[0, 0, 0.2]} rotation={[0, 0, -1.88]} scale={[-0.06, -0.02, -0.06]} />
                <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.001']} position={[0, 0, 0.4]} rotation={[0, 0, -1.88]} scale={[-0.06, -0.02, -0.06]} />
            </group>
        </group>
    )
}




const CanvasFirst = () => {
    return (
        <Canvas id={"first"} >
            < Suspense fallback={null}>
                <ambientLight  color="lightblue" intensity={0.84}/>
                <pointLight color="lightgrey" intensity={0.8} position={[10, 10, 10]} />
                <pointLight color="lightgrey" intensity={0.9} position={[10, -10, 10]} />
                <Model/>
                <gridHelper/>
            </Suspense>
        </Canvas>
    );
};

export default CanvasFirst;