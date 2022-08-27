import React, { useEffect, useState } from "react"
import { Container } from "@mui/system"
import EcoFashLogo from "@/public/ecofash_logo.svg"
import styles from "@/styles/components/Nav.module.scss"
import Link from "next/link"
import { Button } from "@mui/material"
import { useRouter } from "next/router"

const routes = [
  { name: "Home", path: "/" },
  { name: "Materials", path: "/materials" },
]

//TODO: Responsive UI
export default function Nav({ stickyNav }) {
  const router = useRouter()
  return (
    <div
      className={`${styles.navbar_wrapper} ${
        stickyNav && styles.navbar_sticky
      }`}
    >
      <Container maxWidth="lg" className={styles.navbar}>
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
                    router.pathname === route.path && styles.selected
                  }`}
                >
                  {route.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
