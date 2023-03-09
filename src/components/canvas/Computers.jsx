import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={100}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [-5, -3, -2.5] : [0, -3.25, -1.25]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    //them 1 trình lắng nghe sự kiện mà thay đổi kích thước
    const mediaQuery = window.matchMedia('(max-width:500px)')
    //sau đó đặt giá trị ban đầu của biến trạng thái isMobile 
    setIsMobile(mediaQuery.matches);
    //sau đó xác định 1 cuộc gọi lại chức năng xử lý các thay đổi với phương tiện truy vấn
    const handleMediaQuyeryChange = (e) => {
      setIsMobile(e.matches)
    }
    //them chức năng gọi lại dưới dạng lắng nghe những thay đổi đối với phương tiện truyền thông tuy vấn
    mediaQuery.addEventListener('change', handleMediaQuyeryChange);
    //sau đó loại bỏ người nghe khi thành phần không đếm thì sao điều này không phải là bây giờ coi nó như 1 thiết bị di động  
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuyeryChange);
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >
        {/* loader nay de sua loi khi giao dien chua load xong */}
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas