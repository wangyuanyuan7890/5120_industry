import useSpline from "@splinetool/r3f-spline"
import { OrthographicCamera } from "@react-three/drei"
import { useRouter } from "next/router"

export default function Scene({ ...props }) {
  const router = useRouter()

  const { nodes, materials } = useSpline(
    "https://prod.spline.design/YSaVriJNkeJnN1yq/scene.splinecode"
  )
  return (
    <>
      <color attach="background" args={["#d2fed5"]} />
      <group {...props} dispose={null}>
        <mesh
          name="Blue"
          geometry={nodes.Blue.geometry}
          material={materials["Blue Material"]}
          castShadow
          receiveShadow
          position={[100, 0, 0]}
          onClick={(e) => router.push("/lifecycle")}
        />
        <mesh
          name="Red"
          geometry={nodes.Red.geometry}
          material={materials["Red Material"]}
          castShadow
          receiveShadow
          position={[0, 0, 100]}
        />
        <mesh
          name="Green"
          geometry={nodes.Green.geometry}
          material={materials["Green Material"]}
          castShadow
          receiveShadow
          position={[0, 100, 0]}
        />
        <group name="Walls" position={[-2.5, 47.5, -2.5]}>
          <mesh
            name="Left wall"
            geometry={nodes["Left wall"].geometry}
            material={materials["Left wall Material"]}
            castShadow
            receiveShadow
            position={[-50, 0, 2.5]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1, 0.05, 1]}
          />
          <mesh
            name="Right wall"
            geometry={nodes["Right wall"].geometry}
            material={materials["Right wall Material"]}
            castShadow
            receiveShadow
            position={[0, 0, -50]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[1, 0.05, 1.05]}
          />
          <mesh
            name="Floor"
            geometry={nodes.Floor.geometry}
            material={materials["Floor Material"]}
            castShadow
            receiveShadow
            position={[2.5, -47.5, 2.5]}
            scale={[1, 0.05, 1]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[769.63, 471.07, 773.76]}
          rotation={[-0.51, 0.71, 0.35]}
          key={undefined}
          attach={undefined}
          args={undefined}
          onUpdate={undefined}
          view={undefined}
          raycast={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          visible={undefined}
          type={undefined}
          id={undefined}
          uuid={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
          left={undefined}
          right={undefined}
          bottom={undefined}
          top={undefined}
          zoom={undefined}
          matrixWorldInverse={undefined}
          projectionMatrix={undefined}
          projectionMatrixInverse={undefined}
          isCamera={undefined}
          setViewOffset={undefined}
          clearViewOffset={undefined}
          updateProjectionMatrix={undefined}
          isOrthographicCamera={undefined}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
          position={[0, 1, 0]}
        />
      </group>
    </>
  )
}
