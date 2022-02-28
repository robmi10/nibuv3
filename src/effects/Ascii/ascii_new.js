import React,{useEffect, useRef, useState} from 'react'
import { AsciiEffect } from './ascii_effect'
import * as THREE from "three";
import { TrackballControls } from 'three-stdlib';
import GifLoader from 'three-gif-loader';
import { dispose } from '@react-three/fiber';
import { PlainAnimator } from 'three-plain-animator/lib/plain-animator';
import { parseGIF, decompressFrames } from 'gifuct-js'
const Ascii_new = ({video, gif, width_input, height_input}) => {
/*   const [color_, setColor] = useState("blue")
  const[input_ref, setInput_ref] = useState(false) */

  
  const controlcolor = useRef(null);

  const mountRef3 = useRef(null);
  const videoRef = useRef(null);
  const [mounted, setMounted]= useState(false)

  /*var supGif = new SuperGif({ gif: document.getElementById('gif1') } );
  supGif.load(); */
  //var gifCanvas = supGif.get_canvas();
  /* const texturePath =  video;
  const spriteTexture = new  THREE.TextureLoader().load(texturePath)
  const animator =  new PlainAnimator(spriteTexture, 15, 20, 83, 8); */
  //"width, height, smooth, speed"
  
  useEffect(() => {
    //console.log("current vide ->", video)
    let camera, controls, scene, renderer, effect;
    let sphere, plane;
    const start = Date.now();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.y = 30;
    camera.position.z = 500;
    scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(512, 512);
        /*
        var promisedGif = fetch("https://media3.giphy.com/media/XqKu2VpXi9Nkj19dqq/giphy.gif")
        .then(resp => resp.arrayBuffer())
        .then(buff => parseGIF(buff))
        .then(gif => decompressFrames(gif, true));
        */
        /* 
        const loading = new GifLoader();
        const texture = loading.load(gif,); 
        */
        //const texture = animator.init();  
        videoRef.current.play()
        const texture = new THREE.VideoTexture(videoRef.current)
        //const texture = new THREE.TextureLoader().load(promisedGif); 
        //const texture = new THREE.Texture(loading)
        //console.log("texture -->", texture)
    const material = new THREE.MeshBasicMaterial({ map: texture});
    let mesh = new THREE.Mesh(geometry, material)
    
    init();
    animate();

        function init() {
          scene.background = new THREE.Color(0,0,0);

          /*const pointLight1 = new THREE.PointLight( 0xffffff );
          pointLight1.position.set( 500, 500, 500 );
          scene.add( pointLight1 ); */
          /*const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
          pointLight2.position.set( - 500, - 500, - 500 );
          scene.add( pointLight2 );*/
          //load a image resource

          mesh.position.set(0, 0, 0);
          scene.add( mesh );
          renderer = new THREE.WebGLRenderer();
          renderer.setSize(200, 1000 );
          //renderer.domElement.style.color = 'green';
            
              effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true, bAlpha: true } );
              // effect.setSize( 1070, 420 );
              effect.setSize( width_input, height_input );
              var decreaseCubeSize = (color_now) => {
              effect.domElement.style.color = color_now;};
              controls = new TrackballControls( camera );
              effect.domElement.style.backgroundColor = 'transparent';
          
          // Special case: append effect.domElement, instead of renderer.domElement.
          // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.
          //document.body.appendChild( effect.domElement );     
          mountRef3.current.appendChild(effect.domElement );
          // window.addEventListener( 'resize', onWindowResize, true );
          controlcolor.current = {decreaseCubeSize}
        }
          /*function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
          effect.setSize( window.innerWidth, window.innerHeight );
        } */
        function animate() {
          requestAnimationFrame( animate );
          //animator.animate()
          render(); 
        }

        function render() {
          const timer = Date.now() - start;
          /*sphere.rotation.x = timer * 0.0003;
          sphere.rotation.z = timer * 0.0002; */
          // controls.update();
          effect.render(scene, camera);
          setMounted(true)
        }
        return () => {
          if(mounted){
          mountRef3.current.removeChild( effect.domElement);
          videoRef.current.removeChild(effect.domElement);   
          scene.remove(mesh) 
          console.log("inside dispose mesh")
          scene.remove(mesh)
          geometry.dispose()
          material.dispose()
          renderer.clear()
          renderer.renderLists.dispose();
          setMounted(false)
        }
        }
  }, [])
  return (
    <>
           <div ref={mountRef3}>

          <video style={{display: 'none'}} 
                ref={videoRef} 
                controls={true} 
                autoPlay={true}
                loop={true}
                muted={true}
                src={video}
                type="video/webm"
                >
              </video> 

                </div> 
             
             
               
            {/* <img ref={videoRef} src={gif}>
            </img> */}
    </>
  )
}

export default Ascii_new
