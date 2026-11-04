import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const productsDirectory = join(process.cwd(), "markdown/products");

export function getProductSlugs() {
  return fs.readdirSync(productsDirectory);
}

export function getProductBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(productsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {};

  function processImages(content: string) {
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = processImages(content);
    }

    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllProducts(fields: string[] = []) {
  const slugs = getProductSlugs();
  const products = slugs
    .map((slug) => getProductBySlug(slug, fields));

  return products;
}
