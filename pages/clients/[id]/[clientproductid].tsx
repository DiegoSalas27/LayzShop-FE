import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router';

function SelectedClientProductPage() {
  const router = useRouter()

  console.log(router.query)

  return (
    <div className={styles.container}>
      <h1>The Product page for a specific Client</h1>
    </div>
  )
}

export default SelectedClientProductPage;