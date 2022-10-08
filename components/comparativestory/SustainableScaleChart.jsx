import { SustainableScaleData } from "../../data/SustainableScale"
import styles from "@/styles/components/SustainableScale.module.scss"

export default function SustainableScaleChart(props) {
  console.log(props.data)
  const valueVic =
    SustainableScaleData.find((x) => x.who === "Average Victorian").count * 100

  const valueSus =
    SustainableScaleData.find((x) => x.who === "Sustainable Goal").count * 100

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <span className={styles.box_title}>Percentage</span>
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
              opacity: "1",
            }}
          >
            <span
              style={{
                position: "absolute",
                width: "200px",
                right: "50px",
                height: `${props.data * 0.83}mm`,
                fontSize: "15px",
                fontWeight: "500",
                color: "#000000",
                background: "transparent",
                zIndex: "1",
                transform: "scale(-1)",
              }}
            >
              ◄ Your sustainability {props.data}%
            </span>
            <span
              style={{
                position: "absolute",
                width: "200px",
                right: "-170px",
                height: `${valueVic * 0.83}mm`,
                fontSize: "15px",
                fontWeight: "500",
                color: "#000000",
                background: "transparent",
                zIndex: "1",
                transform: "scale(-1)",
              }}
            >
              AVG Victorians {valueVic}% ➤
            </span>
            <span
              style={{
                position: "absolute",
                width: "200px",
                right: "-170px",
                height: `${valueSus * 0.83}mm`,
                fontSize: "15px",
                fontWeight: "500",
                color: "#000000",
                background: "transparent",
                zIndex: "1",
                transform: "scale(-1)",
              }}
            >
              Sustainable goal {valueSus}% ➤
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
