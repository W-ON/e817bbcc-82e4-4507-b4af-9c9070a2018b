import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import config from '@config/config.json';
import Base from '@layouts/Baseof';
import path from 'path';
import { getListPage } from '../lib/contentParser';
      import { Banner } from '@layouts/components/Banner';
import { Feature } from '@layouts/components/Feature';
import { Services } from '@layouts/components/Services';
import { Workflow } from '@layouts/components/Workflow';
import { Contact } from '@layouts/components/Contact';

const Home = ({ frontmatter }) => {
  const router = useRouter();
  const myDivRef = useRef(null);
  const { title } = config.site;

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const hash = router.asPath.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }, [router.asPath]);

  return (
        <Base title={title}>
          <Banner banner={frontmatter.banner} />
          <Feature feature={frontmatter.feature} />
          <Services services={frontmatter.services} />
          <Workflow workflow={frontmatter.workflow} />
          <Contact contact={frontmatter.contact} />
        </Base>
        );
};

export const getStaticProps = async () => {
  const fileName = path.basename(__filename, '.js');
  const homePage = await getListPage(`content/${fileName}.json`);
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
