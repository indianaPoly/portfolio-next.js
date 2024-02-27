import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";

export default function Home() {
  const BLOG_DIR = "blogs";

  const files = fs.readdirSync(path.join(BLOG_DIR));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>블로그 관련된 사이트임</h1>
      <div>
        {blogs.map((blog) => (
          <Link href={"/blogs/" + blog.slug} key={blog.slug}>
            <div>
              <h3>{blog.meta["title"]}</h3>
              <p>{blog.meta["description"]}</p>
            </div>
            <div>
              <p>{blog.meta["date"]}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
