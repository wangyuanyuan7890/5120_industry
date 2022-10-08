import useSpline from "@splinetool/r3f-spline"
import { PerspectiveCamera } from "@react-three/drei"
import { useRouter } from "next/router"

export default function Scene({ items, hoveredItem, setHoveredItem }) {
  const router = useRouter()

  const handleNav = (item) => {
    router.push(item.link)
  }

  const handleHoveredItem = (item) => {
    setHoveredItem(item)
  }

  const handleMatChange = (item, defaultMat) => {
    return hoveredItem
      ? item.name === hoveredItem.name
        ? materials["selected"]
        : defaultMat
      : defaultMat
  }

  const { nodes, materials } = useSpline(
    "https://prod.spline.design/F9AAnOEOrbA760Xp/scene.splinecode"
  )
  return (
    <>
      <color attach="background" args={["#fefefe"]} />
      <group dispose={null}>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          up={[0, 1, 0]}
          position={[14071.81, -767.33, -3450.16]}
          rotation={[3.14, 1.34, -3.14]}
          zoom={1.5}
        />
        <group name="Group">
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials.selected}
            castShadow
            receiveShadow
            position={[1264, -1123.9, 1701.32]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          />
          <group
            name="int-material-rack"
            position={[-1877.39, -689.07, -385.82]}
            onClick={() => handleNav(items.materialRack)}
            onPointerEnter={() => handleHoveredItem(items.materialRack)}
            onPointerLeave={() => handleHoveredItem(null)}
          >
            <group name="shirt  3" position={[7.8, 630.69, -388.49]}>
              <mesh
                name="Tshirt2"
                geometry={nodes.Tshirt2.geometry}
                material={handleMatChange(items.materialRack, materials.red)}
                position={[-2.69, -12.04, -1.2]}
                scale={[0.72, 0.72, 0.48]}
              />
              <group
                name="hanger2"
                position={[-2.01, 210.96, -286.47]}
                scale={[0.4, 0.4, 0.6]}
              >
                <mesh
                  name="Up"
                  geometry={nodes.Up.geometry}
                  material={handleMatChange(
                    items.materialRack,
                    materials.greyparts
                  )}
                  position={[-8.68, 571.01, 459.16]}
                  scale={[1.67, 1.67, 0.52]}
                />
                <mesh
                  name="right"
                  geometry={nodes.right.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
                <mesh
                  name="left"
                  geometry={nodes.left.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
              </group>
            </group>
            <group name="shirt " position={[7.8, 630.69, 277.24]}>
              <mesh
                name="Tshirt21"
                geometry={nodes.Tshirt21.geometry}
                material={handleMatChange(items.materialRack, materials.red)}
                position={[-2.69, -12.04, -1.2]}
                scale={[0.72, 0.72, 0.48]}
              />
              <group
                name="hanger21"
                position={[-2.01, 210.96, -286.47]}
                scale={[0.4, 0.4, 0.6]}
              >
                <mesh
                  name="Up1"
                  geometry={nodes.Up1.geometry}
                  material={handleMatChange(
                    items.materialRack,
                    materials.greyparts
                  )}
                  position={[-8.68, 571.01, 459.16]}
                  scale={[1.67, 1.67, 0.52]}
                />
                <mesh
                  name="right1"
                  geometry={nodes.right1.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
                <mesh
                  name="left1"
                  geometry={nodes.left1.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
              </group>
            </group>
            <group name="shirt  2" position={[7.81, 630.69, 112.42]}>
              <mesh
                name="Tshirt22"
                geometry={nodes.Tshirt22.geometry}
                material={handleMatChange(items.materialRack, materials.blue)}
                position={[-2.69, -12.04, -1.2]}
                scale={[0.72, 0.72, 0.48]}
              />
              <group
                name="hanger22"
                position={[-2.01, 210.96, -286.47]}
                scale={[0.4, 0.4, 0.6]}
              >
                <mesh
                  name="Up2"
                  geometry={nodes.Up2.geometry}
                  material={handleMatChange(
                    items.materialRack,
                    materials.greyparts
                  )}
                  position={[-8.68, 571.01, 459.16]}
                  scale={[1.67, 1.67, 0.52]}
                />
                <mesh
                  name="right2"
                  geometry={nodes.right2.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
                <mesh
                  name="left2"
                  geometry={nodes.left2.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
              </group>
            </group>
            <group name="shirt 1" position={[7.81, 630.69, -34.38]}>
              <mesh
                name="Tshirt23"
                geometry={nodes.Tshirt23.geometry}
                material={handleMatChange(items.materialRack, materials.blue)}
                position={[-2.69, -12.04, -1.2]}
                scale={[0.72, 0.72, 0.48]}
              />
              <group
                name="hanger23"
                position={[-2.01, 210.96, -286.47]}
                scale={[0.4, 0.4, 0.6]}
              >
                <mesh
                  name="Up3"
                  geometry={nodes.Up3.geometry}
                  material={handleMatChange(
                    items.materialRack,
                    materials.greyparts
                  )}
                  position={[-8.68, 571.01, 459.16]}
                  scale={[1.67, 1.67, 0.52]}
                />
                <mesh
                  name="right3"
                  geometry={nodes.right3.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
                <mesh
                  name="left3"
                  geometry={nodes.left3.geometry}
                  material={handleMatChange(items.materialRack, materials.wood)}
                  position={[-11.24, 204.3, 459.16]}
                  scale={[1.41, 1.41, 0.09]}
                />
              </group>
            </group>
            <group name="rack stand">
              <mesh
                name="Cylinder 7"
                geometry={nodes["Cylinder 7"].geometry}
                material={handleMatChange(
                  items.materialRack,
                  materials.blasckparts
                )}
                position={[0, -931.79, -574.78]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[2, 0.63, 2]}
              />
              <mesh
                name="Cylinder 6"
                geometry={nodes["Cylinder 6"].geometry}
                material={handleMatChange(
                  items.materialRack,
                  materials.blasckparts
                )}
                position={[0, -931.79, 569.95]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[2, 0.63, 2]}
              />
              <mesh
                name="Cylinder 4"
                geometry={nodes["Cylinder 4"].geometry}
                material={handleMatChange(
                  items.materialRack,
                  materials.blasckparts
                )}
                position={[-0.38, 144.02, -575.79]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.12, 5.17, 0.1]}
              />
              <mesh
                name="Cylinder 3"
                geometry={nodes["Cylinder 3"].geometry}
                material={handleMatChange(
                  items.materialRack,
                  materials.blasckparts
                )}
                position={[-0.38, 139.42, 578.67]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.12, 5.18, 0.1]}
              />
              <mesh
                name="Cylinder 5"
                geometry={nodes["Cylinder 5"].geometry}
                material={handleMatChange(
                  items.materialRack,
                  materials.blasckparts
                )}
                position={[-0.38, -717.91, 1.35]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.1, 3.5, 0.1]}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes["Cylinder 2"].geometry}
                material={handleMatChange(
                  items.materialRack,
                  materials.blasckparts
                )}
                position={[-0.38, 1033.79, 1.35]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[0.07, 3.5, 0.05]}
              />
            </group>
          </group>
          <group
            name="int-lifecycle"
            position={[-2338.71, 381.47, 1090.38]}
            scale={[2.27, 1, 0.85]}
            onClick={() => handleNav(items.lifecycle)}
            onPointerEnter={() => handleHoveredItem(items.lifecycle)}
            onPointerLeave={() => handleHoveredItem(null)}
          >
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={handleMatChange(
                items.lifecycle,
                materials["Cube Material"]
              )}
              position={[-50.3, -66.54, 5.78]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[1, 1.18, 0.44]}
            />
            <mesh
              name="ecofash.png"
              geometry={nodes["ecofash.png"].geometry}
              material={handleMatChange(
                items.lifecycle,
                materials["ecofash.png Material"]
              )}
              position={[-11.44, -46.46, -11.91]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.48, 1, 0.55]}
            />
            <mesh
              name="Cube 2"
              geometry={nodes["Cube 2"].geometry}
              material={handleMatChange(items.lifecycle, materials.blasckparts)}
              position={[-27.77, -523.99, 0]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[1, 1, 1.57]}
            />
          </group>
          <group
            name="int-clothing-tracker"
            position={[-1775.01, -226.26, -2164.91]}
            onClick={() => handleNav(items.tracker)}
            onPointerEnter={() => handleHoveredItem(items.tracker)}
            onPointerLeave={() => handleHoveredItem(null)}
          >
            <mesh
              name="wardrobe outer"
              geometry={nodes["wardrobe outer"].geometry}
              material={handleMatChange(items.tracker, materials.wood)}
              position={[4.67, 11, 21.71]}
              scale={[1, 1, 1.06]}
            >
              <mesh
                name="Cube 8"
                geometry={nodes["Cube 8"].geometry}
                material={handleMatChange(items.tracker, materials.wood)}
                visible={false}
                position={[267.84, 7.39, -27.84]}
                scale={[1.46, 0.98, 0.92]}
              />
              <mesh
                name="Cube 7"
                geometry={nodes["Cube 7"].geometry}
                material={handleMatChange(items.tracker, materials.wood)}
                visible={false}
                position={[-46.18, -11, -20.43]}
                scale={[1.16, 1.04, 1.12]}
              />
            </mesh>
            <mesh
              name="Cube 4"
              geometry={nodes["Cube 4"].geometry}
              material={materials.whiteparts}
              position={[-7.82, 41.84, -7.37]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[3.2, 0.08, 1.86]}
            />
            <mesh
              name="Cube 3"
              geometry={nodes["Cube 3"].geometry}
              material={materials.whiteparts}
              position={[-7.82, -621.83, -3.65]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[3.2, 0.08, 1.86]}
            />
            <group
              name="right door"
              position={[576.06, 18.78, -503.42]}
              scale={[0.86, 0.96, 1]}
            >
              <mesh
                name="Cube 9"
                geometry={nodes["Cube 9"].geometry}
                material={handleMatChange(items.tracker, materials.greyparts)}
                castShadow
                receiveShadow
                position={[24.25, 0, 487.49]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.05, 4.26, 0.1]}
              />
              <mesh
                name="Cube 13"
                geometry={nodes["Cube 13"].geometry}
                material={handleMatChange(items.tracker, materials.greyparts)}
                castShadow
                receiveShadow
                position={[33.84, 0, -361.36]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.03, 4.26, 0.1]}
              />
              <mesh
                name="Cube 71"
                geometry={nodes["Cube 71"].geometry}
                material={materials.glass}
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
                material={handleMatChange(items.tracker, materials.blasckparts)}
                castShadow
                receiveShadow
                position={[2.5, 0, 488.22]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.03, 4.26, 0.1]}
              />
              <mesh
                name="Cube 81"
                geometry={nodes["Cube 81"].geometry}
                material={materials.glass}
                castShadow
                receiveShadow
                position={[-2.39, 13.76, -9.52]}
                rotation={[0, -1.57, 0]}
                scale={[-1.55, 4.26, 0.1]}
              />
              <mesh
                name="Cube 12"
                geometry={nodes["Cube 12"].geometry}
                material={handleMatChange(items.tracker, materials.greyparts)}
                castShadow
                receiveShadow
                position={[0.25, 0, -485.4]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-0.03, 4.26, 0.1]}
              />
            </group>
          </group>
          <group
            name="int-map"
            position={[-2124.05, -568.94, 2081.37]}
            onClick={() => handleNav(items.map)}
            onPointerEnter={() => handleHoveredItem(items.map)}
            onPointerLeave={() => handleHoveredItem(null)}
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
                material={handleMatChange(
                  items.map,
                  materials["Cylinder 41 Material"]
                )}
                position={[67.96, 3.09, 19.25]}
                rotation={[-1.46, 0.09, 2.86]}
              />
              <mesh
                name="Cylinder 31"
                geometry={nodes["Cylinder 31"].geometry}
                material={handleMatChange(
                  items.map,
                  materials["Cylinder 31 Material"]
                )}
                position={[73.86, -139.08, 9.72]}
                rotation={[0.12, 0, 0]}
                scale={[0.2, 0.93, 0.2]}
              />
              <mesh
                name="Cylinder 21"
                geometry={nodes["Cylinder 21"].geometry}
                material={handleMatChange(
                  items.map,
                  materials["Cylinder 21 Material"]
                )}
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
                material={handleMatChange(items.map, nodes.Land.material)}
                position={[0, -0.31, 0.32]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
          </group>
          <group
            name="int-story"
            position={[-1178.62, -655.97, 2759.14]}
            onClick={() => handleNav(items.story)}
            onPointerEnter={() => handleHoveredItem(items.story)}
            onPointerLeave={() => handleHoveredItem(null)}
          >
            <mesh
              name="Rectangle001"
              geometry={nodes.Rectangle001.geometry}
              material={handleMatChange(
                items.story,
                nodes.Rectangle001.material
              )}
              position={[-26.35, -192.33, 86.34]}
              rotation={[-2.7, -0.01, 3.13]}
              scale={[2.13, 1.77, 2.06]}
            />
            <mesh
              name="Rectangle003"
              geometry={nodes.Rectangle003.geometry}
              material={handleMatChange(
                items.story,
                nodes.Rectangle003.material
              )}
              position={[-8.84, -170.4, -92.64]}
              rotation={[-1.58, 0, -3.1]}
              scale={[2.1, 2.1, 1.68]}
            />
            <mesh
              name="Rectangle084"
              geometry={nodes.Rectangle084.geometry}
              material={handleMatChange(
                items.story,
                nodes.Rectangle084.material
              )}
              position={[-9.16, -154.48, -32.02]}
              rotation={[-1.58, 0, -3.1]}
              scale={[5.48, 4.45, 1.68]}
            />
            <mesh
              name="Rectangle0841"
              geometry={nodes.Rectangle0841.geometry}
              material={handleMatChange(
                items.story,
                nodes.Rectangle0841.material
              )}
              position={[-16.83, -154.48, -229.65]}
              rotation={[-1.58, 0, -3.1]}
              scale={[2.75, 2.31, 1.68]}
            />
          </group>
          <group name="bed" position={[1381.48, -1006.62, 2041.85]}>
            <mesh
              name="Cube 41"
              geometry={nodes["Cube 41"].geometry}
              material={materials["Bed mat"]}
              position={[15.71, -13.45, -247.02]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 31"
              geometry={nodes["Cube 31"].geometry}
              material={materials.White}
              position={[-386.03, 53.45, 735.73]}
              rotation={[-1.63, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube 21"
              geometry={nodes["Cube 21"].geometry}
              material={materials.White}
              position={[376.35, 52.53, 729.43]}
              rotation={[-1.63, 0, -Math.PI / 2]}
            />
            <mesh
              name="Cube1"
              geometry={nodes.Cube1.geometry}
              material={materials.White}
              position={[17.09, -165.11, -4.06]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="bottom"
              geometry={nodes.bottom.geometry}
              material={materials.wood}
              position={[-18.17, -445.32, -6.82]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="headboard"
              geometry={nodes.headboard.geometry}
              material={materials.wood}
              position={[-21.49, 121.87, 1060.43]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
            />
          </group>
          <group
            name="chair"
            position={[-1284.89, -1058.75, 1526.02]}
            rotation={[0, -0.52, 0]}
            scale={1.25}
          >
            <group name="chair leg" position={[-16.13, -145.8, -7.12]}>
              <mesh
                name="Sphere 3"
                geometry={nodes["Sphere 3"].geometry}
                material={materials.blasckparts}
                position={[-273.92, -256.54, -17.38]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.2}
              />
              <mesh
                name="Sphere 2"
                geometry={nodes["Sphere 2"].geometry}
                material={materials.blasckparts}
                position={[261.47, -256.54, 1.59]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.2}
              />
              <mesh
                name="Sphere 4"
                geometry={nodes["Sphere 4"].geometry}
                material={materials.blasckparts}
                position={[0.52, -242.76, 287.06]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.2}
              />
              <mesh
                name="Sphere"
                geometry={nodes.Sphere.geometry}
                material={materials.blasckparts}
                position={[0.52, -262.25, -269.53]}
                rotation={[-1.68, 0, -Math.PI / 2]}
                scale={0.2}
              />
              <mesh
                name="Cylinder 42"
                geometry={nodes["Cylinder 42"].geometry}
                material={materials.whiteparts}
                position={[130.08, -182.16, 7.26]}
                rotation={[-1.4, 0.27, -Math.PI / 2]}
                scale={[0.09, 14.58, 0.4]}
              />
              <mesh
                name="Cylinder 32"
                geometry={nodes["Cylinder 32"].geometry}
                material={materials.whiteparts}
                position={[-127.81, -184.75, -12.15]}
                rotation={[-1.4, -0.26, -Math.PI / 2]}
                scale={[0.09, 14.58, 0.4]}
              />
              <mesh
                name="Cylinder 51"
                geometry={nodes["Cylinder 51"].geometry}
                material={materials.whiteparts}
                position={[2.06, -182.95, -141.61]}
                rotation={[1.3, -Math.PI / 2, 0]}
                scale={[0.09, 14.58, 0.4]}
              />
              <mesh
                name="Cylinder 22"
                geometry={nodes["Cylinder 22"].geometry}
                material={materials.whiteparts}
                position={[2.06, -185.28, 138.57]}
                rotation={[1.74, -Math.PI / 2, 0]}
                scale={[0.09, 14.58, 0.4]}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.whiteparts}
                position={[2.06, -80.23, -1.83]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.18, 20.61, 0.79]}
              />
            </group>
            <group name="right handle" position={[-298.39, 7.27, -12.12]}>
              <mesh
                name="Cylinder 43"
                geometry={nodes["Cylinder 43"].geometry}
                material={materials.greyparts}
                position={[19.75, 40.09, 0]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={[1, 4.83, 0.45]}
              />
              <mesh
                name="Cylinder 33"
                geometry={nodes["Cylinder 33"].geometry}
                material={materials.greyparts}
                position={[6.89, -15.18, -22.47]}
                rotation={[Math.PI / 2, -1.48, -Math.PI / 2]}
                scale={2}
              />
              <mesh
                name="Cylinder 23"
                geometry={nodes["Cylinder 23"].geometry}
                material={materials.greyparts}
                position={[44.62, -56.57, -22.47]}
                rotation={[0, 0, -1.52]}
                scale={[2, 1.24, 2]}
              />
            </group>
            <group name="left handle" position={[260.63, 7.27, -12.12]}>
              <mesh
                name="Cylinder 44"
                geometry={nodes["Cylinder 44"].geometry}
                material={materials.greyparts}
                position={[19.75, 40.09, 0]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={[1, 4.83, 0.45]}
              />
              <mesh
                name="Cylinder 34"
                geometry={nodes["Cylinder 34"].geometry}
                material={materials.greyparts}
                position={[6.89, -15.18, -22.47]}
                rotation={[Math.PI / 2, 1.49, -Math.PI / 2]}
                scale={2}
              />
              <mesh
                name="Cylinder 24"
                geometry={nodes["Cylinder 24"].geometry}
                material={materials.greyparts}
                position={[-24.04, -60.11, -22.47]}
                rotation={[0, 0, -1.52]}
                scale={[2, 1.24, 2]}
              />
            </group>
            <mesh
              name="Cube 22"
              geometry={nodes["Cube 22"].geometry}
              material={materials.blasckparts}
              position={[-5.87, -82.49, -20.84]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1, 1, 0.81]}
            />
            <mesh
              name="Cube2"
              geometry={nodes.Cube2.geometry}
              material={materials.blasckparts}
              position={[-0.25, 157.91, -218.25]}
              rotation={[-1.67, 0, -Math.PI / 2]}
              scale={[1.07, 1, 1.09]}
            />
          </group>
          <group
            name="desk"
            position={[-1439.74, -909.25, 2583.24]}
            scale={1.25}
          >
            <mesh
              name="Cube 23"
              geometry={nodes["Cube 23"].geometry}
              material={materials.whiteparts}
              position={[-827.2, -266.66, -33.3]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.36, 1, 1]}
            />
            <mesh
              name="Cube3"
              geometry={nodes.Cube3.geometry}
              material={materials.whiteparts}
              position={[812.88, -284.96, 112.83]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
              name="Shape"
              geometry={nodes.Shape.geometry}
              material={materials.greyparts}
              position={[849.74, 30.3, 297.79]}
              rotation={[-Math.PI / 2, 0, 3.03]}
            />
          </group>
          <group name="window" position={[-1398.84, 301.71, 3145.66]}>
            <mesh
              name="Cube 5"
              geometry={nodes["Cube 5"].geometry}
              material={materials.whiteparts}
              position={[-62.96, -131.45, 28.27]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={[0.61, 0.18, 0.27]}
            />
            <mesh
              name="Cube 42"
              geometry={nodes["Cube 42"].geometry}
              material={materials.whiteparts}
              position={[-987.14, -131.45, 28.27]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={[0.61, 0.18, 0.27]}
            />
            <mesh
              name="Cube 32"
              geometry={nodes["Cube 32"].geometry}
              material={materials.whiteparts}
              position={[1004.74, -131.45, 28.27]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={[0.61, 0.18, 0.27]}
            />
            <mesh
              name="Cube4"
              geometry={nodes.Cube4.geometry}
              material={materials.whiteparts}
              position={[-15.42, 538.81, 28.27]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 0.18, 0.27]}
            />
            <mesh
              name="Cube5"
              geometry={nodes.Cube5.geometry}
              material={materials.whiteparts}
              position={[-15.42, -784.57, 28.27]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1, 0.18, 0.27]}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes["Rectangle 2"].geometry}
              material={materials.blue}
              position={[4.32, -91.37, 22.53]}
              rotation={[0, Math.PI, 0]}
            />
          </group>
          <group name="walls" position={[-14.5, 4.09, -9.8]}>
            <mesh
              name="wall 1"
              geometry={nodes["wall 1"].geometry}
              material={materials.walls}
              position={[-468.91, 55.55, 3143.18]}
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
                name="Cube 24"
                geometry={nodes["Cube 24"].geometry}
                material={materials.walls}
                visible={false}
                position={[469.39, 0, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1, 1.22, 1]}
              />
            </mesh>
            <mesh
              name="wall 2"
              geometry={nodes["wall 2"].geometry}
              material={materials.walls}
              position={[-2616.23, 55.55, -53.89]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1, 1.1, 1]}
            />
          </group>
          <mesh
            name="floor"
            geometry={nodes.floor.geometry}
            material={materials.White}
            position={[0, -1770.35, -44.6]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[6.46, 5.06, 3.85]}
          />
        </group>
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
