import { WearScaleData } from "../../data/WearScale"
import styles from "@/styles/components/WearScale.module.scss"
import { background } from "@chakra-ui/react"
import { keyframes } from "@chakra-ui/react"

export default function WearScaleChart(props) {
  // console.log(props.data)

  const valueVic = WearScaleData.find(
    (x) => x.who === "Average Victorian"
  ).count

  const valueSus = WearScaleData.find((x) => x.who === "Sustainable Goal").count

  var progress = keyframes`
    0% {
    height: 0;
    opacity: 1;
    }
    100% {
        opacity: 1;
    }
    `

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.box_title}>Wear Count</span>
        <div
          style={{
            height: "100%",
            width: "30px",
            borderRadius: "6px",
            marginTop: "6px",
            background: "#D3D3D3",
            transform: "scale(-1)",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "block",
              height: `${props.data}%`,
              width: "100%",
              borderRadius: "6px",
              background: "#006400",
              animation: `@keyframes ${progress} 1s ease-in-out forwards`,
              opacity: "1",
            }}
          >
            <span
              style={{
                position: "absolute",
                width: "200px",
                right: "50px",
                height: `${props.data / 1.09}mm`,
                fontSize: "15px",
                fontWeight: "500",
                color: "#000000",
                background: "transparent",
                zIndex: "1",
                transform: "scale(-1)",
              }}
            >
              ◄ Your wear count is {props.data} times
            </span>
            <span
              style={{
                position: "absolute",
                width: "250px",
                right: "-220px",
                height: `${valueVic / 1.09}mm`,
                fontSize: "15px",
                fontWeight: "500",
                color: "#000000",
                background: "transparent",
                zIndex: "1",
                transform: "scale(-1)",
              }}
            >
              Average Victorian is {valueVic} times ➤
            </span>
            <span
              style={{
                position: "absolute",
                width: "250px",
                right: "-220px",
                height: `${valueSus / 1.09}mm`,
                fontSize: "15px",
                fontWeight: "500",
                color: "#000000",
                background: "transparent",
                zIndex: "1",
                transform: "scale(-1)",
              }}
            >
              Sustainable goal is {valueSus} times ➤
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}