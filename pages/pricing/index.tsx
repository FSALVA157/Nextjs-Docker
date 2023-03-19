
import { Inter } from "next/font/google";
import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";


const inter = Inter({ subsets: ["latin"] });

export default function PricingPage() {
  return (
    <>     
        <h1>Pricing Page</h1>
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

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
