import Head from 'next/head';
// import TopNav from '../components/TopNav';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

import ScrollToPosition from '../components/ScrollToPosition';

import website from '../config/site-data.json';
import { metaTags } from '../config/theme';

export default function DefaultLayout({ title, children, layoutClasses, containerClasses, description, headerImage, scalable }) {

  return (
    <div className={ layoutClasses ? "animate__animated animate__fadeIn "+layoutClasses : "animate__animated animate__fadeIn" } id="layout">
      <Head>
        <title>{ title ? website.name + " | " + title : website.name }</title>
        { metaTags( title, description, scalable ) }
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ScrollToPosition />
      {/* { headerImage ? <Header headerImg={headerImage} /> : <Header /> } */}
      {/* <TopNav links={navlinks} /> */}
        <div className={ containerClasses ? "main-content "+containerClasses : "main-content" } id="main-content">
          { children }
        </div>
      {/* <Footer /> */}
    </div>
  )
}