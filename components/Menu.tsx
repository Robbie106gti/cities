import styles from "../styles/Menu.module.css";
import navigation from "../public/navigation.json";
import Button from "./Button";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

export default function Menu(props: any) {
  const router = useRouter()
  const { city } = props;

  let elActive: HTMLElement | null = null;

  if (process.browser) {
    elActive = document ? document.getElementById("active") : null;
  }
  const handleClick = (event: any) => {
    console.log(event);
    if (elActive && event) {
      elActive.classList.add(styles.active);
      elActive.style.width = event.currentTarget.clientWidth + "px";
      elActive.style.width = event.currentTarget.clientWidth + "px";
      elActive.style.left = event.currentTarget.offsetLeft + "px";
      elActive.hasAttribute("hidden") ? elActive.removeAttribute("hidden") : null;
    }
  };

  return (
    <>
      <div className={styles.menu}>
        {navigation.cities.map((city, index) =>
          (<div onClick={handleClick} key={index} onLoad={handleClick}><Button city={city} /></div>))
        }
      </div>
      <div className={styles.border}></div>
      <div id="active" hidden></div>
    </>
  )
}
