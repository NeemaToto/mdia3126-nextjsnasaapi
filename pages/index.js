import styles from '@/styles/Home.module.css'
import NasaInfo from '@/components/NasaInfo'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <NasaInfo/>
      </main>
    </>
  )
}
