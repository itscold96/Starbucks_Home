import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Head from 'next/head';
import { Nanum_Gothic } from 'next/font/google';
import HomeMain from '@/components/home/HomeMain';

const font = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Starbucks Coffee Korea</title>
        <meta
          name="description"
          content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <Header />
        <HomeMain />
        <Footer />
      </div>
    </>
  );
}