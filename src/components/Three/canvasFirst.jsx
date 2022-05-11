import "./three.scss"
import Three from 'three'
import {Suspense, React, useRef, useState} from 'react';
import {Canvas, useFrame} from "@react-three/fiber";
import { OrbitControl, useGLTF, useAnimations, useCamera} from '@react-three/drei';

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/First_section_About.gltf')
    const { actions } = useAnimations(animations, group)
    const camera = useCamera.PerspectiveCamera( 60, 1, 1, 3);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <cameraHelper args={[camera]} />
                <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.001']} rotation={[0, 0, -1.88]} scale={[-0.06, -0.02, -0.06]} />
                <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.001']} position={[0, 0, 0.2]} rotation={[0, 0, -1.88]} scale={[-0.06, -0.02, -0.06]} />
                <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.001']} position={[0, 0, 0.4]} rotation={[0, 0, -1.88]} scale={[-0.06, -0.02, -0.06]} />
            </group>
        </group>
    )
}



const CanvasFirst = () => {
    return (
        <Canvas id={"first"} camera={0, 0, 0.2}>
            <Suspense fallback={null} >
                <ambientLight/>
                <group />
            </Suspense>
        </Canvas>
    );
};

export default CanvasFirst;