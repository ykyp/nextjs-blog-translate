import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import useTranslation from 'next-translate/useTranslation'

const name = "Your Name";

export default function Layout({ children, home }) {

   const { t, lang } = useTranslation('home');

   return (
      <div className={styles.container}>
         <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
               name="description"
               content="Next.js blog demo"
            />
         </Head>
         <header className={styles.header}>
            {home ? (
               <>

                  <h1>{t('title')}</h1>
                  <p><Link href="/" locale="en">
                     <a>Change to English</a>
                  </Link>
                  </p>
                  <p>
                  <Link href="/"  locale="gr">
                     <a>Change to greek</a>
                  </Link>
                  </p>
               </>
            ) : (
               <>
                  <Link href="/">
                     <a>

                     </a>
                  </Link>
                  <h2>
                     <Link href="/">
                        <a>{name}</a>
                     </Link>
                     <Link href="/" locale="en">
                        <a>en</a>
                     </Link>
                     <Link href="/"  locale="gr">
                        <a>gr</a>
                     </Link>
                  </h2>
               </>
            )}
         </header>
         <main>{children}</main>
         {!home && (
            <div>
               <Link href="/">
                  <a>Home</a>
               </Link>
               <Link href="/" locale="en">
                  <a>en</a>
               </Link>
               <Link href="/"  locale="gr">
                  <a>gr</a>
               </Link>
            </div>

         )}
      </div>
   );
}
