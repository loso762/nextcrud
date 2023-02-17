import HeadMeta from './src/HeadMeta'
import Layout from './src/Layout'
import List from './src/List'
import Update from './src/Update'

export default function Home() {

  return (
    <>
    <Layout>
      <HeadMeta title="CRUD"/>
      <List/>
    </Layout>
    </>
  )
}
