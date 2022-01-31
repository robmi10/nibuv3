import React, { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, Html, Sphere } from "@react-three/drei"
import "./styles.css"
import * as THREE from "three";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { AsciiEffect } from './ascii2';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import NibiruBlack  from "../../components/akirapages/img/Nibiru_Black.png"
import NibiruRed  from "../../components/akirapages/img/Nibiru_Red.png" 
import logo from "../../components/akirapages/img/ixlogo.svg"

import "aos/dist/aos.css"
import Aos from 'aos'


extend({ GlitchPass, BloomPass, AsciiEffect  });
const Scene = ({NewSize}) => {

const ref = useRef()

useFrame((state, delta) => (ref.current.rotation.y += 0.01))
const texture = useLoader(THREE.TextureLoader, NibiruRed)

const [hovered, setHovered] = useState(false)

useEffect(() => {
  document.body.style.cursor = hovered ? 'pointer' : 'auto'
}, [hovered])

  return (
    <>
      <mesh 
      onClick={() =>{console.log("its clickeeed!")}}
      ref={ref}
      style={{cursor: "pointer"}}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      >
      
      <group position={[0,0,0]} rotation={[0,0,0]}>
      <Sphere visible position={[0, 0, 0]} args={[1.5, 200, 200]}>
      <meshStandardMaterial
         
          map={texture}
          
          attach="material"
          color="#fff"
          factor={1} // Strength, 0 disables the effect (default=1)
          speed={2} // Speed (default=1)
          roughness={0.01}
          bumpScale={0.4}
          wireframe
        />

        </Sphere>

        <Html>
          <h1 style={{color: "#ffff", position:"absolute", left: -550}}>NIBIRU</h1>

          <h1 style={{color: "#ffff", position:"absolute", left: 250}}>SOFTWARE</h1>
          
        </Html>


        </group>
      </mesh>
    </>
  );
}   

/* const Floor = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
              <planeBufferGeometry args={[100, 100, 1]} />
        <meshStandardMaterial  color="white" />
        </mesh>
    );
} */

export default function Glitch() {
  // const { camera, gl } = useThree();

  return (
    <div className="containerglitch1" >

          <Canvas >

            <Effects>
              <glitchPass attachArray="passes" />
            </Effects>  

            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.05} />
            <pointLight intensity={0.2} color="red" />

            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback={null}>
              <Scene />
          
            </Suspense>
            
          </Canvas>
  
    </div>
  )
}

