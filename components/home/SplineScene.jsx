import useSpline from "@splinetool/r3f-spline"
import { OrthographicCamera } from "@react-three/drei"
import { useRouter } from "next/router"

export default function Scene({ ...props }) {
  const router = useRouter()

  const handleNav = (location) => {
    router.push(location)
  }

  const { nodes, materials } = useSpline(
    "https://prod.spline.design/F9AAnOEOrbA760Xp/scene.splinecode"
  )
  return (
    <>
      <color attach="background" args={["#fefefe"]} />
      <group {...props} dispose={null}>
        <group
          name="interactive clothing rack"
          position={[-1618.08, -786.98, -1657.95]}
          onClick={() => handleNav("/materials")}
        >
          <group name="shirt hanger 2" position={[7.81, 636.69, -160]}>
            <mesh
              name="Tshirt2"
              geometry={nodes.Tshirt2.geometry}
              material={materials.tshirt}
              position={[-2.69, -12.04, -1.2]}
              scale={[0.72, 0.72, 0.48]}
            />
            <group
              name="hanger2"
              position={[-2.01, 130.96, -290.47]}
              scale={[0.4, 0.4, 0.6]}
            >
              <mesh
                name="sphere"
                geometry={nodes.sphere.geometry}
                material={materials.metal}
                position={[-65.4, 579.91, 459.23]}
                scale={0.91}
              />
              <mesh
                name="Up"
                geometry={nodes.Up.geometry}
                material={materials.metal}
                position={[-8.68, 571.01, 459.16]}
                scale={[1.67, 1.67, 0.52]}
              />
              <mesh
                name="right"
                geometry={nodes.right.geometry}
                material={materials.wood}
                position={[-11.24, 204.3, 459.16]}
                scale={[1.41, 1.41, 0.09]}
              />
              <mesh
                name="left"
                geometry={nodes.left.geometry}
                material={materials.wood}
                position={[-11.24, 204.3, 459.16]}
                scale={[1.41, 1.41, 0.09]}
              />
            </group>
          </group>
          <group name="shirt hanger 1" position={[7.81, 630.69, 148.31]}>
            <mesh
              name="Tshirt1"
              geometry={nodes.Tshirt1.geometry}
              material={materials.tshirt}
              position={[-2.69, -12.04, -1.2]}
              scale={[0.72, 0.72, 0.48]}
            />
            <group
              name="hanger1"
              position={[-2.01, 130.96, -275]}
              scale={[0.4, 0.4, 0.6]}
            >
              <mesh
                name="sphere1"
                geometry={nodes.sphere1.geometry}
                material={materials.metal}
                position={[-65.4, 579.91, 459.23]}
                scale={0.91}
              />
              <mesh
                name="Up1"
                geometry={nodes.Up1.geometry}
                material={materials.metal}
                position={[-8.68, 571.01, 459.16]}
                scale={[1.67, 1.67, 0.52]}
              />
              <mesh
                name="right1"
                geometry={nodes.right1.geometry}
                material={materials.wood}
                position={[-11.24, 204.3, 459.16]}
                scale={[1.41, 1.41, 0.09]}
              />
              <mesh
                name="left1"
                geometry={nodes.left1.geometry}
                material={materials.wood}
                position={[-11.24, 204.3, 459.16]}
                scale={[1.41, 1.41, 0.09]}
              />
            </group>
          </group>
          <group name="rack stand">
            <mesh
              name="Cylinder 7"
              geometry={nodes["Cylinder 7"].geometry}
              material={materials["Cylinder 7 Material"]}
              position={[0, -931.79, -574.78]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[2, 0.63, 2]}
            />
            <mesh
              name="Cylinder 6"
              geometry={nodes["Cylinder 6"].geometry}
              material={materials["Cylinder 6 Material"]}
              position={[0, -931.79, 569.95]}
              rotation={[Math.PI / 2, Math.PI / 2, 0]}
              scale={[2, 0.63, 2]}
            />
            <mesh
              name="Cylinder 4"
              geometry={nodes["Cylinder 4"].geometry}
              material={materials["Cylinder 4 Material"]}
              position={[-0.38, 144.02, -575.79]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.12, 5.17, 0.1]}
            />
            <mesh
              name="Cylinder 3"
              geometry={nodes["Cylinder 3"].geometry}
              material={materials["Cylinder 3 Material"]}
              position={[-0.38, 139.42, 578.67]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.12, 5.18, 0.1]}
            />
            <mesh
              name="Cylinder 5"
              geometry={nodes["Cylinder 5"].geometry}
              material={materials["Cylinder 5 Material"]}
              position={[-0.38, -717.91, 1.35]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.1, 3.5, 0.1]}
            />
            <mesh
              name="Cylinder 2"
              geometry={nodes["Cylinder 2"].geometry}
              material={materials["Cylinder 2 Material"]}
              position={[-0.38, 1033.79, 1.35]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.07, 3.5, 0.05]}
            />
          </group>
        </group>
        <group
          name="interactive board"
          position={[-2159.86, 283.56, 33.21]}
          onClick={() => handleNav("/lifecycle")}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Cube Material"]}
            position={[-50.3, -66.54, 5.78]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[1, 1.18, 0.44]}
          />
          <mesh
            name="ecofash.png"
            geometry={nodes["ecofash.png"].geometry}
            material={materials["ecofash.png Material"]}
            position={[-11.44, -46.46, -11.91]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.48, 1, 0.55]}
          />
          <mesh
            name="Cube 2"
            geometry={nodes["Cube 2"].geometry}
            material={materials["Cube 2 Material"]}
            position={[-27.77, -523.99, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[1, 1, 1.57]}
          />
        </group>
        <group name="bed" position={[1640.79, -1104.53, 769.71]}>
          <mesh
            name="Cube 4"
            geometry={nodes["Cube 4"].geometry}
            material={materials["Cube 4 Material"]}
            position={[15.71, -13.45, -247.02]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            name="Shape 2"
            geometry={nodes["Shape 2"].geometry}
            material={materials["Shape 2 Material"]}
            position={[-108.21, -316.66, 468.07]}
            rotation={[-2.39, 0.3, 2.86]}
          />
          <mesh
            name="Shape"
            geometry={nodes.Shape.geometry}
            material={materials["Shape Material"]}
            position={[-113.06, -302.06, 479.78]}
            rotation={[-2.39, 0.3, 2.86]}
          />
          <mesh
            name="Cube 3"
            geometry={nodes["Cube 3"].geometry}
            material={materials["Cube 3 Material"]}
            position={[-386.03, 53.45, 735.73]}
            rotation={[-1.63, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube 21"
            geometry={nodes["Cube 21"].geometry}
            material={materials["Cube 21 Material"]}
            position={[376.35, 52.53, 729.43]}
            rotation={[-1.63, 0, -Math.PI / 2]}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials["Cube1 Material"]}
            position={[17.09, -165.11, -4.06]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            name="bottom"
            geometry={nodes.bottom.geometry}
            material={materials["bottom Material"]}
            position={[-18.17, -445.32, -6.82]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            name="headboard"
            geometry={nodes.headboard.geometry}
            material={materials["headboard Material"]}
            position={[-21.49, 121.87, 1060.43]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
          />
        </group>
        <group
          name="interactive globe"
          position={[-1864.75, -666.85, 809.24]}
          onClick={() => handleNav("/sustainablelocations")}
        >
          <group
            name="globe stand"
            position={[2.93, 0.76, -12.25]}
            rotation={[-0.21, -0.65, -0.16]}
            scale={1.7}
          >
            <mesh
              name="Cylinder 41"
              geometry={nodes["Cylinder 41"].geometry}
              material={materials["Cylinder 41 Material"]}
              position={[67.96, 3.09, 19.25]}
              rotation={[-1.46, 0.09, 2.86]}
            />
            <mesh
              name="Cylinder 31"
              geometry={nodes["Cylinder 31"].geometry}
              material={materials["Cylinder 31 Material"]}
              position={[73.86, -139.08, 9.72]}
              rotation={[0.12, 0, 0]}
              scale={[0.2, 0.93, 0.2]}
            />
            <mesh
              name="Cylinder 21"
              geometry={nodes["Cylinder 21"].geometry}
              material={materials["Cylinder 21 Material"]}
              position={[70.02, -1.95, 17.79]}
              rotation={[0.12, 0, 0]}
              scale={[0.2, 0.93, 0.2]}
            />
          </group>
          <group
            name="globe"
            position={[90.49, 8.49, 83.62]}
            rotation={[-0.06, -0.08, -0.05]}
            scale={1.7}
          >
            <mesh
              name="Globe"
              geometry={nodes.Globe.geometry}
              material={nodes.Globe.material}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Land"
              geometry={nodes.Land.geometry}
              material={nodes.Land.material}
              position={[0, -0.31, 0.32]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              name="Grid"
              geometry={nodes.Grid.geometry}
              material={nodes.Grid.material}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
        <group
          name="interactive laptop"
          position={[-1361.97, -10.87, -60.74]}
          scale={[1.75, 1.4, 1.75]}
          onClick={() => handleNav("/trends")}
        >
          <group
            name="mac top"
            position={[256.21, -527.78, 1005.25]}
            rotation={[1.88, -0.02, -0.03]}
          >
            <mesh
              name="Shape1"
              geometry={nodes.Shape1.geometry}
              material={nodes.Shape1.material}
              position={[-14.57, -21.04, 130.07]}
              rotation={[-1.44, -0.02, 0.03]}
              scale={0.02}
            />
            <mesh
              name="Cylinder001"
              geometry={nodes.Cylinder001.geometry}
              material={nodes.Cylinder001.material}
              position={[-17.74, -12.8, 44.58]}
              rotation={[1.7, 0.02, 3.11]}
              scale={0.58}
            />
            <mesh
              name="Cylinder002"
              geometry={nodes.Cylinder002.geometry}
              material={nodes.Cylinder002.material}
              position={[0.76, -14.4, 44.64]}
              rotation={[1.7, 0.02, 3.11]}
              scale={0.16}
            />
            <mesh
              name="Cylinder003"
              geometry={nodes.Cylinder003.geometry}
              material={nodes.Cylinder003.material}
              position={[-35.71, -13.85, 45.07]}
              rotation={[1.7, 0.02, 3.11]}
              scale={0.16}
            />
            <mesh
              name="Rectangle001"
              geometry={nodes.Rectangle001.geometry}
              material={nodes.Rectangle001.material}
              position={[-13.87, -25.66, 154.12]}
              rotation={[1.7, 0.02, 3.11]}
              scale={1.2}
            />
            <mesh
              name="Rectangle002"
              geometry={nodes.Rectangle002.geometry}
              material={nodes.Rectangle002.material}
              position={[2.04, -17.99, 120.98]}
              rotation={[1.71, -0.02, 3.13]}
              scale={[0.9, 1.2, 1.2]}
            />
          </group>
          <group
            name="MAC laptop"
            position={[1010.8, -9.93, 1365.78]}
            rotation={[3.13, -0.86, 3.14]}
            scale={2.5}
          >
            <group
              name="keyboard"
              position={[39.92, -246.16, 367.17]}
              rotation={[-Math.PI / 2, 0, -0.82]}
              scale={0.48}
            >
              <mesh
                name="Rectangle004"
                geometry={nodes.Rectangle004.geometry}
                material={nodes.Rectangle004.material}
                position={[-109.4, 36.24, -0.25]}
              />
              <mesh
                name="Rectangle005"
                geometry={nodes.Rectangle005.geometry}
                material={nodes.Rectangle005.material}
                position={[-91.13, 36.24, -0.25]}
              />
              <mesh
                name="Rectangle006"
                geometry={nodes.Rectangle006.geometry}
                material={nodes.Rectangle006.material}
                position={[-72.86, 36.24, -0.25]}
              />
              <mesh
                name="Rectangle007"
                geometry={nodes.Rectangle007.geometry}
                material={nodes.Rectangle007.material}
                position={[-54.59, 36.24, -0.25]}
              />
              <mesh
                name="Rectangle008"
                geometry={nodes.Rectangle008.geometry}
                material={nodes.Rectangle008.material}
                position={[83.89, 36.28, -0.11]}
              />
              <mesh
                name="Rectangle009"
                geometry={nodes.Rectangle009.geometry}
                material={nodes.Rectangle009.material}
                position={[-118.48, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle021"
                geometry={nodes.Rectangle021.geometry}
                material={nodes.Rectangle021.material}
                position={[113.52, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle022"
                geometry={nodes.Rectangle022.geometry}
                material={nodes.Rectangle022.material}
                position={[-101.13, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle023"
                geometry={nodes.Rectangle023.geometry}
                material={nodes.Rectangle023.material}
                position={[-83.78, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle024"
                geometry={nodes.Rectangle024.geometry}
                material={nodes.Rectangle024.material}
                position={[-66.43, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle025"
                geometry={nodes.Rectangle025.geometry}
                material={nodes.Rectangle025.material}
                position={[-49.07, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle026"
                geometry={nodes.Rectangle026.geometry}
                material={nodes.Rectangle026.material}
                position={[-31.72, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle027"
                geometry={nodes.Rectangle027.geometry}
                material={nodes.Rectangle027.material}
                position={[-14.37, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle028"
                geometry={nodes.Rectangle028.geometry}
                material={nodes.Rectangle028.material}
                position={[2.98, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle029"
                geometry={nodes.Rectangle029.geometry}
                material={nodes.Rectangle029.material}
                position={[20.33, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle030"
                geometry={nodes.Rectangle030.geometry}
                material={nodes.Rectangle030.material}
                position={[37.69, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle031"
                geometry={nodes.Rectangle031.geometry}
                material={nodes.Rectangle031.material}
                position={[55.04, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle032"
                geometry={nodes.Rectangle032.geometry}
                material={nodes.Rectangle032.material}
                position={[72.39, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle033"
                geometry={nodes.Rectangle033.geometry}
                material={nodes.Rectangle033.material}
                position={[89.74, 23.8, -0.1]}
              />
              <mesh
                name="Rectangle034"
                geometry={nodes.Rectangle034.geometry}
                material={nodes.Rectangle034.material}
                position={[-88.8, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle035"
                geometry={nodes.Rectangle035.geometry}
                material={nodes.Rectangle035.material}
                position={[-71.44, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle036"
                geometry={nodes.Rectangle036.geometry}
                material={nodes.Rectangle036.material}
                position={[-54.09, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle037"
                geometry={nodes.Rectangle037.geometry}
                material={nodes.Rectangle037.material}
                position={[-36.74, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle038"
                geometry={nodes.Rectangle038.geometry}
                material={nodes.Rectangle038.material}
                position={[-19.39, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle039"
                geometry={nodes.Rectangle039.geometry}
                material={nodes.Rectangle039.material}
                position={[-2.04, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle040"
                geometry={nodes.Rectangle040.geometry}
                material={nodes.Rectangle040.material}
                position={[15.32, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle041"
                geometry={nodes.Rectangle041.geometry}
                material={nodes.Rectangle041.material}
                position={[32.67, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle042"
                geometry={nodes.Rectangle042.geometry}
                material={nodes.Rectangle042.material}
                position={[50.02, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle043"
                geometry={nodes.Rectangle043.geometry}
                material={nodes.Rectangle043.material}
                position={[67.37, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle044"
                geometry={nodes.Rectangle044.geometry}
                material={nodes.Rectangle044.material}
                position={[84.72, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle045"
                geometry={nodes.Rectangle045.geometry}
                material={nodes.Rectangle045.material}
                position={[102.08, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle046"
                geometry={nodes.Rectangle046.geometry}
                material={nodes.Rectangle046.material}
                position={[119.43, 9.15, -0.1]}
              />
              <mesh
                name="Rectangle047"
                geometry={nodes.Rectangle047.geometry}
                material={nodes.Rectangle047.material}
                position={[-88.8, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle048"
                geometry={nodes.Rectangle048.geometry}
                material={nodes.Rectangle048.material}
                position={[-71.44, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle049"
                geometry={nodes.Rectangle049.geometry}
                material={nodes.Rectangle049.material}
                position={[-54.09, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle050"
                geometry={nodes.Rectangle050.geometry}
                material={nodes.Rectangle050.material}
                position={[-36.74, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle051"
                geometry={nodes.Rectangle051.geometry}
                material={nodes.Rectangle051.material}
                position={[-19.39, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle052"
                geometry={nodes.Rectangle052.geometry}
                material={nodes.Rectangle052.material}
                position={[-2.04, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle053"
                geometry={nodes.Rectangle053.geometry}
                material={nodes.Rectangle053.material}
                position={[15.32, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle054"
                geometry={nodes.Rectangle054.geometry}
                material={nodes.Rectangle054.material}
                position={[32.67, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle055"
                geometry={nodes.Rectangle055.geometry}
                material={nodes.Rectangle055.material}
                position={[50.02, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle056"
                geometry={nodes.Rectangle056.geometry}
                material={nodes.Rectangle056.material}
                position={[67.37, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle057"
                geometry={nodes.Rectangle057.geometry}
                material={nodes.Rectangle057.material}
                position={[84.72, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle058"
                geometry={nodes.Rectangle058.geometry}
                material={nodes.Rectangle058.material}
                position={[110.9, -6.12, -0.1]}
              />
              <mesh
                name="Rectangle059"
                geometry={nodes.Rectangle059.geometry}
                material={nodes.Rectangle059.material}
                position={[-76.43, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle060"
                geometry={nodes.Rectangle060.geometry}
                material={nodes.Rectangle060.material}
                position={[-59.08, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle061"
                geometry={nodes.Rectangle061.geometry}
                material={nodes.Rectangle061.material}
                position={[-41.72, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle062"
                geometry={nodes.Rectangle062.geometry}
                material={nodes.Rectangle062.material}
                position={[-24.37, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle063"
                geometry={nodes.Rectangle063.geometry}
                material={nodes.Rectangle063.material}
                position={[-7.02, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle064"
                geometry={nodes.Rectangle064.geometry}
                material={nodes.Rectangle064.material}
                position={[10.33, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle065"
                geometry={nodes.Rectangle065.geometry}
                material={nodes.Rectangle065.material}
                position={[27.68, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle066"
                geometry={nodes.Rectangle066.geometry}
                material={nodes.Rectangle066.material}
                position={[45.04, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle067"
                geometry={nodes.Rectangle067.geometry}
                material={nodes.Rectangle067.material}
                position={[62.39, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle068"
                geometry={nodes.Rectangle068.geometry}
                material={nodes.Rectangle068.material}
                position={[79.74, -20.83, -0.1]}
              />
              <mesh
                name="Rectangle069"
                geometry={nodes.Rectangle069.geometry}
                material={nodes.Rectangle069.material}
                position={[108.83, -20.52, -0.1]}
              />
              <mesh
                name="Rectangle070"
                geometry={nodes.Rectangle070.geometry}
                material={nodes.Rectangle070.material}
                position={[-112.13, 8.93, -0.1]}
              />
              <mesh
                name="Rectangle071"
                geometry={nodes.Rectangle071.geometry}
                material={nodes.Rectangle071.material}
                position={[-112.13, -5.92, -0.1]}
              />
              <mesh
                name="Rectangle072"
                geometry={nodes.Rectangle072.geometry}
                material={nodes.Rectangle072.material}
                position={[-106.26, -20.89, -0.1]}
              />
              <mesh
                name="Rectangle073"
                geometry={nodes.Rectangle073.geometry}
                material={nodes.Rectangle073.material}
                position={[-118.71, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle074"
                geometry={nodes.Rectangle074.geometry}
                material={nodes.Rectangle074.material}
                position={[-101.34, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle075"
                geometry={nodes.Rectangle075.geometry}
                material={nodes.Rectangle075.material}
                position={[-83.96, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle076"
                geometry={nodes.Rectangle076.geometry}
                material={nodes.Rectangle076.material}
                position={[-63.57, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle077"
                geometry={nodes.Rectangle077.geometry}
                material={nodes.Rectangle077.material}
                position={[-8.54, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle078"
                geometry={nodes.Rectangle078.geometry}
                material={nodes.Rectangle078.material}
                position={[46.33, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle079"
                geometry={nodes.Rectangle079.geometry}
                material={nodes.Rectangle079.material}
                position={[67.08, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle080"
                geometry={nodes.Rectangle080.geometry}
                material={nodes.Rectangle080.material}
                position={[84.24, -35.39, -0.1]}
              />
              <mesh
                name="Rectangle081"
                geometry={nodes.Rectangle081.geometry}
                material={nodes.Rectangle081.material}
                position={[102.07, -31.92, 0.07]}
                scale={[1, 1.11, 1]}
              />
              <mesh
                name="Rectangle082"
                geometry={nodes.Rectangle082.geometry}
                material={nodes.Rectangle082.material}
                position={[102.07, -38.82, 0.07]}
                rotation={[0, 0, Math.PI]}
                scale={[1, 1.11, 1]}
              />
              <mesh
                name="Rectangle083"
                geometry={nodes.Rectangle083.geometry}
                material={nodes.Rectangle083.material}
                position={[119.52, -35.39, -0.1]}
              />
              <mesh
                name="Box002"
                geometry={nodes.Box002.geometry}
                material={nodes.Box002.material}
                position={[0, 0, -1.79]}
              />
            </group>
            <mesh
              name="Rectangle003"
              geometry={nodes.Rectangle003.geometry}
              material={nodes.Rectangle003.material}
              position={[35.24, -249.34, 372.83]}
              rotation={[-Math.PI / 2, 0, -0.82]}
              scale={0.48}
            />
            <mesh
              name="Rectangle084"
              geometry={nodes.Rectangle084.geometry}
              material={nodes.Rectangle084.material}
              position={[12.75, -247.07, 394.66]}
              rotation={[-Math.PI / 2, 0, -0.82]}
              scale={[0.63, 0.53, 0.48]}
            />
            <mesh
              name="Rectangle085"
              geometry={nodes.Rectangle085.geometry}
              material={nodes.Rectangle085.material}
              position={[12.55, -246.01, 395.92]}
              rotation={[-Math.PI / 2, 0, -0.82]}
            />
          </group>
        </group>
        <group
          name="chair"
          position={[-1025.58, -1156.66, 253.89]}
          rotation={[0, -0.52, 0]}
          scale={1.25}
        >
          <group name="chair leg" position={[-16.13, -145.8, -7.12]}>
            <mesh
              name="Sphere 3"
              geometry={nodes["Sphere 3"].geometry}
              material={materials["Sphere 3 Material"]}
              position={[-273.92, -256.54, -17.38]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.2}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes["Sphere 2"].geometry}
              material={materials["Sphere 2 Material"]}
              position={[261.47, -256.54, 1.59]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.2}
            />
            <mesh
              name="Sphere 4"
              geometry={nodes["Sphere 4"].geometry}
              material={materials["Sphere 4 Material"]}
              position={[0.52, -242.76, 287.06]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.2}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials["Sphere Material"]}
              position={[0.52, -262.25, -269.53]}
              rotation={[-1.68, 0, -Math.PI / 2]}
              scale={0.2}
            />
            <mesh
              name="Cylinder 42"
              geometry={nodes["Cylinder 42"].geometry}
              material={materials["Cylinder 42 Material"]}
              position={[130.08, -182.16, 7.26]}
              rotation={[-1.4, 0.27, -Math.PI / 2]}
              scale={[0.09, 14.58, 0.4]}
            />
            <mesh
              name="Cylinder 32"
              geometry={nodes["Cylinder 32"].geometry}
              material={materials["Cylinder 32 Material"]}
              position={[-127.81, -184.75, -12.15]}
              rotation={[-1.4, -0.26, -Math.PI / 2]}
              scale={[0.09, 14.58, 0.4]}
            />
            <mesh
              name="Cylinder 51"
              geometry={nodes["Cylinder 51"].geometry}
              material={materials["Cylinder 51 Material"]}
              position={[2.06, -182.95, -141.61]}
              rotation={[1.3, -Math.PI / 2, 0]}
              scale={[0.09, 14.58, 0.4]}
            />
            <mesh
              name="Cylinder 22"
              geometry={nodes["Cylinder 22"].geometry}
              material={materials["Cylinder 22 Material"]}
              position={[2.06, -185.28, 138.57]}
              rotation={[1.74, -Math.PI / 2, 0]}
              scale={[0.09, 14.58, 0.4]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials["Cylinder Material"]}
              position={[2.06, -80.23, -1.83]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.18, 20.61, 0.79]}
            />
          </group>
          <group name="right handle" position={[-298.39, 7.27, -12.12]}>
            <mesh
              name="Cylinder 43"
              geometry={nodes["Cylinder 43"].geometry}
              material={materials["Cylinder 43 Material"]}
              position={[19.75, 40.09, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1, 4.83, 0.45]}
            />
            <mesh
              name="Cylinder 33"
              geometry={nodes["Cylinder 33"].geometry}
              material={materials["Cylinder 33 Material"]}
              position={[6.89, -15.18, -22.47]}
              rotation={[Math.PI / 2, -1.48, -Math.PI / 2]}
              scale={2}
            />
            <mesh
              name="Cylinder 23"
              geometry={nodes["Cylinder 23"].geometry}
              material={materials["Cylinder 23 Material"]}
              position={[44.62, -56.57, -22.47]}
              rotation={[0, 0, -1.52]}
              scale={[2, 1.24, 2]}
            />
          </group>
          <group name="left handle" position={[260.63, 7.27, -12.12]}>
            <mesh
              name="Cylinder 44"
              geometry={nodes["Cylinder 44"].geometry}
              material={materials["Cylinder 44 Material"]}
              position={[19.75, 40.09, 0]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={[1, 4.83, 0.45]}
            />
            <mesh
              name="Cylinder 34"
              geometry={nodes["Cylinder 34"].geometry}
              material={materials["Cylinder 34 Material"]}
              position={[6.89, -15.18, -22.47]}
              rotation={[Math.PI / 2, 1.49, -Math.PI / 2]}
              scale={2}
            />
            <mesh
              name="Cylinder 24"
              geometry={nodes["Cylinder 24"].geometry}
              material={materials["Cylinder 24 Material"]}
              position={[-24.04, -60.11, -22.47]}
              rotation={[0, 0, -1.52]}
              scale={[2, 1.24, 2]}
            />
          </group>
          <mesh
            name="Cube 22"
            geometry={nodes["Cube 22"].geometry}
            material={materials["Cube 22 Material"]}
            position={[-5.87, -82.49, -20.84]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1, 1, 0.81]}
          />
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={materials["Cube2 Material"]}
            position={[-0.25, 157.91, -218.25]}
            rotation={[-1.67, 0, -Math.PI / 2]}
            scale={[1.07, 1, 1.09]}
          />
        </group>
        <group
          name="desk"
          position={[-1180.44, -1007.16, 1311.11]}
          scale={1.25}
        >
          <mesh
            name="Cube 23"
            geometry={nodes["Cube 23"].geometry}
            material={materials["Cube 23 Material"]}
            position={[-827.2, -266.66, -33.3]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.36, 1, 1]}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={materials["Cube3 Material"]}
            position={[812.88, -284.96, 112.83]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            name="Shape 21"
            geometry={nodes["Shape 21"].geometry}
            material={materials["Shape 21 Material"]}
            position={[821.86, -52.95, 294.63]}
            rotation={[-Math.PI / 2, 0, 3.03]}
          />
          <mesh
            name="Shape2"
            geometry={nodes.Shape2.geometry}
            material={materials.glass}
            position={[849.74, 30.3, 297.79]}
            rotation={[-Math.PI / 2, 0, 3.03]}
          />
        </group>
        <group name="window" position={[-1139.53, 203.8, 1873.52]}>
          <mesh
            name="Cylinder1"
            geometry={nodes.Cylinder1.geometry}
            material={materials["Cylinder1 Material"]}
            position={[10.31, 596.09, -61.3]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.15, 7.34, 0.15]}
          />
          <mesh
            name="Cube 24"
            geometry={nodes["Cube 24"].geometry}
            material={materials["Cube 24 Material"]}
            position={[-15.42, 495.38, 28.27]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1, 0.18, 0.27]}
          />
          <mesh
            name="Cube 5"
            geometry={nodes["Cube 5"].geometry}
            material={materials["Cube 5 Material"]}
            position={[-62.96, -131.45, 28.27]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[0.61, 0.18, 0.27]}
          />
          <mesh
            name="Cube 41"
            geometry={nodes["Cube 41"].geometry}
            material={materials["Cube 41 Material"]}
            position={[-987.14, -131.45, 28.27]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[0.61, 0.18, 0.27]}
          />
          <mesh
            name="Cube 31"
            geometry={nodes["Cube 31"].geometry}
            material={materials["Cube 31 Material"]}
            position={[1004.74, -131.45, 28.27]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
            scale={[0.61, 0.18, 0.27]}
          />
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={materials["Cube4 Material"]}
            position={[-15.42, -717.84, 28.27]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1, 0.18, 0.27]}
          />
          <mesh
            name="Rectangle 2"
            geometry={nodes["Rectangle 2"].geometry}
            material={materials["Rectangle 2 Material"]}
            position={[4.32, -91.37, 22.53]}
          />
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials["Rectangle Material"]}
            position={[-46.07, 0, 84.48]}
          />
          <mesh
            name="blind"
            geometry={nodes.blind.geometry}
            material={materials["blind Material"]}
            position={[0.61, 379.16, -73.96]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[7.15, 1.48, 1]}
          />
        </group>
        <group name="walls" position={[244.81, -93.82, -1281.94]}>
          <mesh
            name="wall 1"
            geometry={nodes["wall 1"].geometry}
            material={materials["wall 1 Material"]}
            position={[-468.91, 56.26, 3143.18]}
          >
            <mesh
              name="Rectangle1"
              geometry={nodes.Rectangle1.geometry}
              material={materials["Rectangle1 Material"]}
              visible={false}
              position={[-905.12, 122.83, 61.94]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={[1, 1.26, 34.04]}
            />
            <mesh
              name="Cube 25"
              geometry={nodes["Cube 25"].geometry}
              material={materials["Cube 25 Material"]}
              visible={false}
              position={[469.39, 0, 0]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 1.22, 1]}
            />
          </mesh>
          <mesh
            name="wall 2"
            geometry={nodes["wall 2"].geometry}
            material={materials["wall 2 Material"]}
            position={[-2616.23, 55.55, -53.89]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1, 1.1, 0.99]}
          />
        </group>
        <group
          name="interactive wardrobe"
          position={[-1515.71, -324.17, -3437.04]}
          onClick={() => handleNav("/clothingtracker")}
        >
          <mesh
            name="wardrobe outer"
            geometry={nodes["wardrobe outer"].geometry}
            material={materials["wardrobe outer Material"]}
            position={[4.67, 11, 21.71]}
            scale={[1, 1, 1.06]}
          >
            <mesh
              name="Cube 8"
              geometry={nodes["Cube 8"].geometry}
              material={materials["Cube 8 Material"]}
              visible={false}
              position={[267.84, 7.39, -27.84]}
              scale={[1.46, 0.98, 0.92]}
            />
            <mesh
              name="Cube 7"
              geometry={nodes["Cube 7"].geometry}
              material={materials["Cube 7 Material"]}
              visible={false}
              position={[-46.18, -11, -20.43]}
              scale={[1.16, 1.04, 1.12]}
            />
          </mesh>
          <mesh
            name="Cylinder2"
            geometry={nodes.Cylinder2.geometry}
            material={materials["Cylinder2 Material"]}
            position={[53.43, 987.72, -13.37]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.04, 2.33, 0.04]}
          />
          <mesh
            name="Cube 6"
            geometry={nodes["Cube 6"].geometry}
            material={materials["Cube 6 Material"]}
            position={[507.14, -991.06, -419.9]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[-0.05, 1.72, 0.09]}
          />
          <mesh
            name="Cube 51"
            geometry={nodes["Cube 51"].geometry}
            material={materials["Cube 51 Material"]}
            position={[484.44, -961.89, -444.84]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[2.58, 1.96, 0.09]}
          />
          <mesh
            name="Cube 42"
            geometry={nodes["Cube 42"].geometry}
            material={materials["Cube 42 Material"]}
            position={[-7.82, -202.28, -7.37]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[3.2, 0.08, 1.86]}
          />
          <mesh
            name="Cube 32"
            geometry={nodes["Cube 32"].geometry}
            material={materials["Cube 32 Material"]}
            position={[-7.82, -621.83, -3.65]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[3.2, 0.08, 1.86]}
          />
          <mesh
            name="Cube 26"
            geometry={nodes["Cube 26"].geometry}
            material={materials["Cube 26 Material"]}
            position={[-7.82, -976.14, 4.81]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
            scale={[1.15, 0.08, 1.86]}
          />
          <mesh
            name="Cube5"
            geometry={nodes.Cube5.geometry}
            material={materials["Cube5 Material"]}
            position={[-7.82, -993.39, 435.16]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.46, 0.08, 1.86]}
          />
          <group
            name="right door"
            position={[576.06, 18.78, -503.42]}
            scale={[0.86, 0.96, 1]}
          >
            <mesh
              name="Cube 9"
              geometry={nodes["Cube 9"].geometry}
              material={materials["Cube 9 Material"]}
              castShadow
              receiveShadow
              position={[24.25, 0, 487.49]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[-0.05, 4.26, 0.1]}
            />
            <mesh
              name="Cube 13"
              geometry={nodes["Cube 13"].geometry}
              material={materials["Cube 13 Material"]}
              castShadow
              receiveShadow
              position={[33.84, 0, -361.36]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[-0.03, 4.26, 0.1]}
            />
            <mesh
              name="Cube 71"
              geometry={nodes["Cube 71"].geometry}
              material={materials["Cube 71 Material"]}
              castShadow
              receiveShadow
              position={[2.95, 0, 55.63]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[-1.34, 4.26, 0.1]}
            />
          </group>
          <group
            name="left door"
            position={[588.5, 3.83, 429.24]}
            scale={[0.85, 0.95, 0.86]}
          >
            <mesh
              name="Cube 14"
              geometry={nodes["Cube 14"].geometry}
              material={materials["Cube 14 Material"]}
              castShadow
              receiveShadow
              position={[2.5, 0, 488.22]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[-0.03, 4.26, 0.1]}
            />
            <mesh
              name="Cube 81"
              geometry={nodes["Cube 81"].geometry}
              material={materials["Cube 81 Material"]}
              castShadow
              receiveShadow
              position={[-2.39, 13.76, -9.52]}
              rotation={[0, -1.57, 0]}
              scale={[-1.55, 4.26, 0.1]}
            />
            <mesh
              name="Cube 12"
              geometry={nodes["Cube 12"].geometry}
              material={materials["Cube 12 Material"]}
              castShadow
              receiveShadow
              position={[0.25, 0, -485.4]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[-0.03, 4.26, 0.1]}
            />
          </group>
        </group>
        <mesh
          name="floor"
          geometry={nodes.floor.geometry}
          material={materials["floor Material"]}
          position={[246.06, -1868.26, -1316.74]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[6.38, 4.91, 3.85]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.08}
          far={100000}
          near={-100000}
          position={[773.75, -62.2, -2348.1]}
          rotation={[-2.88, 0.63, 2.98]}
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
