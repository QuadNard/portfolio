import Head from 'next/head';
import { HeroSection } from '@/components/home/hero-sections';
import { homeInfo, projects, workexperiences } from '@/lib/data';
import { HighlightedProjects } from '@/components/home/project-cards';
import { KnownTechs } from '@/components/home/known-tech';
import { WorkExp } from '@/components/home/work-experience';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Justin Portfolio</title>
      </Head>
      <section>
        {homeInfo.map((item, index) => (
          <HeroSection key={index} homeInfo={item} />
        ))}
      </section>
      <section>
        <KnownTechs />
      </section>
      <section>
        <HighlightedProjects projects={projects} />
      </section>
      <section>
        <WorkExp experiences={workexperiences} />
      </section>
    </div>
  );
}
