import { GetStaticPaths, GetStaticProps } from "next";

type ListProps = {
  date: string;
};

const BlogPost = ({ date }: ListProps) => {
  return <h1>{date}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};

export default BlogPost;
