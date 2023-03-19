import Head from "next/head";
import { Inter } from "next/font/google";
// import '@/styles/globals.css'
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>     
        <h1>About Page</h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.js</code>
          </p>
        </div>
        <div className="content">
          <Link
            href="/"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="className">Ir a Home</h4>
          </Link>
        </div>      
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
