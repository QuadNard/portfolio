import Head from 'next/head';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
      </Head>
    </div>
  );
}
