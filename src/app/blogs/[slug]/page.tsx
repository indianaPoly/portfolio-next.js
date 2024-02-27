import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export const generateStaticParams = async () => {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
};

export const generateMetaData = async ({ params }: any) => {
  const blog = getPost(params);
  return {
    title: blog.frontMatter["title"],
    description: blog.frontMatter["description"],
  };
};

const getPost = ({ slug }: { slug: string }) => {
  const mdFile = fs.readFileSync(path.join("blogs", slug + ".mdx"), "utf-8");
  const { data: frontMatter, content } = matter(mdFile);
  return {
    frontMatter,
    slug,
    content,
  };
};

const Post = ({ params }: any) => {
  const props = getPost(params);
  return (
    <article>
      <h1>{props.frontMatter["title"]}</h1>
      <MDXRemote source={props.content} />
    </article>
  );
};

export default Post;
