import fs from "fs";
import path from "path";
import matter from "gray-matter";


export function getAllCollections(collection) {
  const contentDirectory = path.join(process.cwd(), `content/${collection}`);
  const fileNames = fs.readdirSync(contentDirectory);

  const allContentData = fileNames.map(fileName => {

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });

  return allContentData;
}

export function getCollectionIds(collection) {
  const contentDirectory = path.join(process.cwd(), `content/${collection}`);
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getCollectionById(collection, id) {
  const contentDirectory = path.join(process.cwd(), `content/${collection}`);
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}
