import { Suspense, useEffect, useState } from 'react'
import Posts from './componets/Posts'
import axios from 'axios'

export type PostType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

function App() {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const postFeatch = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setPosts(data)
    }

    postFeatch()
  }, [])

  return (
    <div>
      <Suspense fallback={<p>loading</p>}>
        <Posts posts={posts} />
      </Suspense>
    </div>
  )
}

export default App