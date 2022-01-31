import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {OrbitControls, Icosahedron, useCubeTexture, useTexture, MeshDistortMaterial, Effects, MeshWobbleMaterial, OrthographicCamera , Html, Sphere } from "@react-three/drei"
import * as THREE from "three";

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import "../Glitch/styles.css"
import { PointLight } from 'three';
import layer1 from "../IXlogo/imageslogo/down_blk.png"
import layer2 from "../IXlogo/imageslogo/left_blk.png"
import layer3 from "../IXlogo/imageslogo/right_blk.png"
import layer4 from "../IXlogo/imageslogo/up_blk.png"
import "./IXlogo.css"

import "aos/dist/aos.css"
import Aos from 'aos'

function Box() {

  const [down, right, left, up] = useLoader(TextureLoader, [layer1, layer2, layer3, layer4]);

  const mesh = useRef()


  useFrame(({ clock, camera }) => {
    mesh.current.rotation.y += 0.005
    camera.position.z = 1 
    camera.position.y = 36.5
    camera.position.z = 90 

  })
  return (

    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry"args={[40, 28, 40]}/>

      <meshStandardMaterial attachArray="material" map={left} />
      <meshStandardMaterial attachArray="material" map={right} />
      <meshStandardMaterial attachArray="material" map={left} />
      <meshStandardMaterial attachArray="material" map={down}/>
      <meshStandardMaterial attachArray="material" map={up} />
      <meshStandardMaterial attachArray="material" map={up}/> 

    </mesh>

  )
}

export default function IXtoken() {
  return (
    <div className ="Containerlogo">
      <div className = "LogoPosition" data-aos ="slide-up">
        <Canvas>

        <ambientLight intensity={1.5} color="#e57468" />

          <Suspense fallback={null}>
            <Box  />
          </Suspense>
        </Canvas>
        </div>
    </div>
  )
}