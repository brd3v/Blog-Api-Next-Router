import Head from 'next/head'
import Image from 'next/image'
import PostBlog from './postBlog/postBLog'
import Login from './components/Login'

export default function Home() {
return(

  <div className='app'>
<Login />
</div>
  )
}
