import Image from 'next/image'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import navigation from "../public/navigation.json";
import styles from "../styles/Home.module.css";

export interface City {
  label: string;
  section: string;
  image: string;
}

export default function CityPage() {
  const router = useRouter();
  const [ city, setCity] = useState({} as City);
  useEffect(() => {
    setCity(city => {
      const find = navigation.cities.find(c => c.section === router.query.city) as City;
      if (!find) {
        return {
          label: router.query.city,
          section: router.query.city,
          image: "Apple_park_cupertino_2019.jpg"
        } as City;
      }
      return find;
    })
  }, [router.query.city])
  
  return (
    <div className={styles.city} >
      <h2 className={styles.description}>Welcome to {city.label}</h2>
      {city.image ? <Image src={'/images/'+city.image} width={300} height={150} /> : null}
      <button onClick={() => router.back()}>Back</button>
    </div>
  )
}