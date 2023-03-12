import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Robo from "../Robo";
import Interface from "../Interface.jsx";

const RobotHero = ({ isMobile }) => {
  const robo = useGLTF("./robo/scene.gltf");

  return (
    // <mesh>
    //   <hemisphereLight intensity={0.15} groundColor='black' />
    //   <spotLight
    //     position={[-20, 50, 10]}
    //     angle={0.12}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <pointLight intensity={1} />
    //   <primitive
    //     object={computer.scene}

    //     // scale={isMobile ? 0.7 : 0.75}
    //     scale={isMobile ? 0.7 : 0.0075}
    //     position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    //     rotation={[-0.01, -0.2, -0.1]}
    //   />
    // </mesh>
    <>
      {/* <OrbitControls /> */}
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group scale={0.007} position={[0, -3.25, -1.5]}   >
        <Robo />
      </group>
      <mesh

        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}

      >
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShado
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={robo.scene}
          scale={isMobile ? 0.7 : 0.0075}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

const RoboCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas

        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      // onAnimationStart={true}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <RobotHero isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
      <Interface />
    </>
  );
};

export default RoboCanvas;