import React,{useEffect, useRef, useState} from 'react'
import { AsciiEffect } from './ascii_effect'
import * as THREE from "three";
import { TrackballControls } from 'three-stdlib';
import GifLoader from 'three-gif-loader';
import { dispose } from '@react-three/fiber';

const Ascii = ({gif, width_input, height_input}) => {
  const [color_, setColor] = useState("blue")
  const controlcolor = useRef(null);

  const mountRef = useRef(null);

  useEffect(() => {
    let camera, controls, scene, renderer, effect;

    let sphere, plane;

    const start = Date.now();

    init();
    animate();

        function init() {

          camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
          camera.position.y = 30;
          camera.position.z = 500;

          scene = new THREE.Scene();
          scene.background = new THREE.Color(0,0,0);

          const pointLight1 = new THREE.PointLight( 0xffffff );
          pointLight1.position.set( 500, 500, 500 );
          scene.add( pointLight1 );

      /*     const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
          pointLight2.position.set( - 500, - 500, - 500 );
          scene.add( pointLight2 );   */

          const loading = new GifLoader();
            
            // load a image resource
            const texture = loading.load(
              // resource URL
              gif,);

      
          const geometry = new THREE.PlaneGeometry(512, 512);
       
          const material = new THREE.MeshBasicMaterial({ map: texture});
          let mesh = new THREE.Mesh(geometry, material)
          mesh.position.set(0, 0, 0);

          scene.add( mesh );

       

          renderer = new THREE.WebGLRenderer();
          renderer.setSize(200, 1000 );
          //renderer.domElement.style.color = 'green';
            
              effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
              // effect.setSize( 1070, 420 );

              effect.setSize( width_input, height_input );


              var decreaseCubeSize = (color_now) => {
                effect.domElement.style.color = color_now;
              };
              controls = new TrackballControls( camera );
              
              effect.domElement.style.backgroundColor = 'transparent';
          
          // Special case: append effect.domElement, instead of renderer.domElement.
          // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
          //document.body.appendChild( effect.domElement );
          
          mountRef.current.appendChild( renderer.domElement );
            
      
          //

         // window.addEventListener( 'resize', onWindowResize, true );


          
        


        controlcolor.current = {decreaseCubeSize}

        }

    /*     function onWindowResize() {

          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();

          renderer.setSize( window.innerWidth, window.innerHeight );
          effect.setSize( window.innerWidth, window.innerHeight );

        } */

        //

        function animate() {

          requestAnimationFrame( animate );

          render(); 

        }

        function render() {

          const timer = Date.now() - start;
         /*  sphere.rotation.x = timer * 0.0003;
          sphere.rotation.z = timer * 0.0002; */
          // controls.update();
          effect.render( scene, camera );
        }

        return () => mountRef.current.removeChild( effect.domElement);
  }, [])
  return (
    <>
        
  
            <div ref={mountRef}>

            </div>        

    </>
  )
}

export default Ascii
