import { PageIntroduction } from '@/components/projects/page-introduction';
import { projects } from '@/lib/data/index';
import Head from 'next/head';
import { ProjectsList } from '@/components/projects/projects-list';

export const metadata = {
  title: 'Projects',
};

const ListItem = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
};

export default ListItem;
