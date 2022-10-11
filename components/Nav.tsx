import EcoFashLogo from "@/public/ecofash_logo.svg"
import styles from "@/styles/components/Nav.module.scss"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import { Box, Button, SvgIcon, Typography, useMediaQuery } from "@mui/material"
import { Container } from "@mui/system"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// Page routes
const routes = [
  { name: "Home", path: "/" },
  { name: "Sustainable wardrobe", path: "/clothingtracker" },
  { name: "Material checker", path: "/materials" },
  { name: "Lifecycle", path: "/lifecycle" },
  { name: "Sustainable locations", path: "/sustainablelocations" },
  { name: "Comparative Story", path: "/comparativestory" },
]

// Navbar that appears on all pages
export default function Nav({ stickyNav, setStickyNav }) {
  const router = useRouter()
  const isMobile = useMediaQuery("(max-width:1000px)")
  const [expandedMenu, setExpandedMenu] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleDetectExpandedMenu, false)
    window.addEventListener("scroll", handleRemoveMenu)
    return () => {
      window.removeEventListener("resize", handleDetectExpandedMenu)
      window.removeEventListener("scroll", handleRemoveMenu)
    }
  }, [])

  const handleDetectExpandedMenu = () => {
    if (window.innerWidth > 1000) {
      setExpandedMenu(false)
    }
  }

  const handleRemoveMenu = () => {
    if (window.scrollY < 1) {
      setExpandedMenu(false)
    }
  }

  const getPageSection = (path: string) => {
    const paths = path.split("/")
    return "/" + paths[1]
  }

  const handleExpandMenu = (value: boolean) => {
    setExpandedMenu(value)
    if (!value && window.scrollY <= 1) {
      setStickyNav(false)
    }
    if (value) {
      setStickyNav(true)
    }
  }

  return (
    <div
      className={`${styles.navbar_wrapper} ${
        stickyNav && styles.navbar_sticky
      } ${isMobile}`}
    >
      {" "}
      {!isMobile ? (
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
                      sx={{ textAlign: "center" }}
                    >
                      {route.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1em 1em",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
              <Box
                sx={{ display: "flex", gap: "0.75em", alignItems: "center" }}
              >
                <EcoFashLogo className={styles.small_logo} />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: stickyNav ? "white" : "black",
                  }}
                >
                  Ecofash
                </Typography>
              </Box>
            </Link>
            {!expandedMenu ? (
              <MenuIcon
                fontSize="large"
                sx={{ color: stickyNav ? "white" : "black", cursor: "pointer" }}
                onClick={() => handleExpandMenu(true)}
              />
            ) : (
              <CloseIcon
                fontSize="large"
                sx={{ color: stickyNav ? "white" : "black", cursor: "pointer" }}
                onClick={() => handleExpandMenu(false)}
              />
            )}
          </Box>
          {expandedMenu && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.1em",
                padding: "0.5em",
              }}
            >
              {routes.map((x, index) => (
                <Link key={index} href={x.path} passHref>
                  <Button
                    variant="text"
                    sx={{
                      textAlign: "center",
                      color: "white",
                      backgroundColor:
                        getPageSection(router.pathname) === x.path && "#0ac05e",
                    }}
                  >
                    {x.name}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Box>
      )}
    </div>
  )
}
