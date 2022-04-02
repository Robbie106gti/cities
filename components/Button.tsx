import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Menu.module.css";

export default function Button(props: any) {
  const router = useRouter()
  const { city } = props;
  let buttonStyles = styles.button;

  if (process.browser) {
    buttonStyles = `${styles.button}${router.query.city === city.section ? ' ' +styles.activeButton : ''}`;
  }
  
  return (
    <div className={buttonStyles} >
      <Link href={city.section}><span>{city.label}</span></Link>
    </div>
  )
}
