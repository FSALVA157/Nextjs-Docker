import { Inter } from 'next/font/google'
// import '@/styles/globals.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.js</code>
          </p>
          
        </div>

        

        <div className="content">
          <Link
            href="/about"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className={inter.className}>
              Ir a  About 
            </h4>            
          </Link>
        </div>

    </MainLayout>
  )
}




