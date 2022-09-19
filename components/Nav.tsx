import React from "react"
import { Container } from "@mui/system"
import EcoFashLogo from "@/public/ecofash_logo.svg"
import styles from "@/styles/components/Nav.module.scss"
import Link from "next/link"
import { Button, IconButton, Tooltip } from "@mui/material"
import { useRouter } from "next/router"
import { DarkMode } from "@mui/icons-material/"
import { useTheme } from "next-themes"

// Page routes
const routes = [
  { name: "Home", path: "/" },
  { name: "Lifecycle", path: "/lifecycle" },
  { name: "Materials", path: "/materials" },
  { name: "Clothing tracker", path: "/clothingtracker" },
  { name: "Map", path: "/map" },
  { name: "Trends", path: "/trends" },
]

// Navbar that appears on all pages
export default function Nav({ stickyNav }) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  // Toggling theme
  const handleToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const getPageSection = (path: string) => {
    const paths = path.split("/")
    return "/" + paths[1]
  }

  return (
    <div
      className={`${styles.navbar_wrapper} ${
        stickyNav && styles.navbar_sticky
      }`}
    >
      <Container maxWidth="lg">
        <div className={styles.navbar}>
          <div className={styles.main}>
            <Link className={styles.logo_group} href="/" passHref>
              <div className={styles.logo_group}>
                <EcoFashLogo className={styles.logo} />
                <span className={styles.name}>Ecofash</span>
              </div>
            </Link>
            <div className={styles.link_group}>
              {routes.map((route, index) => (
                <Link key={index} href={route.path} passHref>
                  <Button
                    variant="text"
                    className={`${styles.link} ${
                      getPageSection(router.pathname) === route.path &&
                      styles.selected
                    }`}
                  >
                    {route.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
