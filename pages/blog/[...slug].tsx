import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

function BlogPostsPage() {
  const router = useRouter()

  console.log(router.query)

  // we can use this values in our database to filter blog posts
  // where the year is 2020 and the month is 12 for example

  return (
    <div className={styles.container}>
      <h1>The Blog Posts</h1>
    </div>
  )
}

export default BlogPostsPage;