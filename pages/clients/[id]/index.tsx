import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css'

function ClientProductsPage() {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientproductid]',
      query: { id: 'max', clientproductid: 'bananas' }
    })
    // router.push('/clients/max/bananas') // navigates to a different page
    // router.replace('/clients/max/bananas') // replaces page (cannot go back)
  }

  return (
    <div className={styles.container}>
      <h1>The Products Bought of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Product A</button>
    </div>
  )
}

export default ClientProductsPage;