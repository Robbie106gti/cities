import styles from "../styles/Menu.module.css";
import navigation from "../public/navigation.json";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const activeClasses = `${styles.active} ${styles.hidden}`

  let elActive: HTMLElement | null = null;
  let elSelect: HTMLElement | null = null;


  if (process.browser) {
    updateActive();
    window.addEventListener('resize', updateActive);
  }

function updateActive(): void {
  elActive = document ? document.getElementById("active") : null;
  elSelect = document ? document.getElementById(router.query.city as string) : null;
  elActive ? !router.query?.city ? elActive.classList.add(styles.hidden) : elActive.classList.remove(styles.hidden) : null;
  if(elActive && elSelect) {
    elActive.style.width = `${elSelect.clientWidth}px`;
    elActive.style.left = `${elSelect.offsetLeft}px`;
  }
}

  return (
    <>
      <div className={styles.menu}>
        {navigation.cities.map((city, index) =>
          (<div key={index} id={city.section}><Button city={city} /></div>))
        }
      </div>
      <div className={styles.border}></div>
      <div id="active" className={activeClasses}></div>
    </>
  )
}
