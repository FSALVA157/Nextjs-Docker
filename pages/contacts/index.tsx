import Head from "next/head";
import { Inter } from "next/font/google";

import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";


const inter = Inter({ subsets: ["latin"] });

export default function ContactsPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
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
            <h4 className={inter.className}>Ir a Home</h4>
          </Link>
        </div>      
    </MainLayout>
  );
}


