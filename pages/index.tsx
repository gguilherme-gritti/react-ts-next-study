import type { GetServerSideProps, GetStaticProps, NextPage } from "next";

type ListProps = {
  repositories: string[];
  date: string;
};

const getData = async () => {
  const response = await fetch(
    "https://api.github.com/users/gguilherme-gritti/repos"
  );
  const data = await response.json();

  const repositoryNames = data.map((item: { name: string }) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5 * 60 * 60, // 5 Segundos
  };
};

const Home = ({ repositories, date }: ListProps) => {
  return (
    <>
      <h4>{date}</h4>
      <ul>
        {repositories.map((repo: string) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
};

/* SSR */
/* export const getServerSideProps: GetServerSideProps = async () => {
  const result = await getData();
  return result;
}; */

/* SSG */
/* Para testar, rodar em 'produção' => npm run build, npm start */
export const getStaticProps: GetStaticProps = async () => {
  const result = await getData();

  return result;
};

export default Home;
