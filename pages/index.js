import Head from 'next/head'
import Image from 'next/image'
import PostBlog from './postBlog/postBLog'

export default function Home() {
return(

  <div className='app'>
<PostBlog />
</div>
  )
}
