const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const parser = require("node-html-parser");
const { convert } = require("html-to-text");
const algoliasearch = require("algoliasearch/lite");
const contentDirectory = path.join(process.cwd(), ".next/serverless/pages");

function getAllFilesInDirectory(articleDirectory, files) {
  files = files ? files : [];
  fs.readdirSync(articleDirectory).forEach(function (file) {
    const subpath = path.join(articleDirectory, file);
    if (fs.lstatSync(subpath).isDirectory()) {
      getAllFilesInDirectory(subpath, files);
    } else {
      files.push(subpath);
    }
  });
  return files;
}

(async function () {
  dotenv.config();

  console.log("Updating search index through Algolia...");

  try {
    // Let's check that we have a .next folder and then parse through the HTML files.
    const pages = [];
    const data = {};
    const to_index = [];

    files = getAllFilesInDirectory(contentDirectory);

    for (const index in files) {
      if (files[index].endsWith(".html")) {
        pages.push(files[index]);
      }
      if (files[index].endsWith(".json")) {
        const url = files[index].split(contentDirectory)[1].split(".json")[0];
        data[url] = files[index];
      }
    }
    
    console.log(`... found ${pages.length} pages to index.`);

    for (const index in pages) {
      // Parse each HTML file and get the content we need
      const contents = fs.readFileSync(pages[index], "utf8");
      const url = pages[index].split(contentDirectory)[1].split(".html")[0];

      const root = parser.parse(contents);
      const doc_title = root.querySelector("title");
      
      const remove_tags = ["select", "label", "img"];
      for (const i in remove_tags) {
        const tags = root.querySelectorAll(remove_tags[i]);
        for (const ii in tags) {
          if (tags[ii].parentNode) {
            tags[ii].parentNode.removeChild(tags[ii]);
          }
        }
      }
      
      let title = root.querySelector("h1");
      const sub_title = root.querySelector("h2");
      const mainContent = root.querySelector("body");
      const content = convert(mainContent && mainContent.innerHTML);

      if ((!title && !sub_title) || !doc_title) {
        console.warn(
          `!!! Skipping ${url} because the document has no title or H1 tag.`
        );
        continue;
      }

      if (!title && sub_title) {
        title = sub_title;
      }

      if (!content) {
        console.warn(
          `!!! Skipping ${url} because the document has no <main> tag.`
        );
        continue;
      }

      to_index.push({
        title: title.text,
        content: content.replace(/ *\[[^\]]*]/, ''),
        url,
        objectID: url,
      });

      console.log(`... prepared ${title.text} at ${url}.`);
    }

    console.log(`... uploading ${to_index.length} pages to Algolia.`);

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    );

    const index = client.initIndex("isolant_website");
    const wipeIndex = await index.clearObjects();
    const algoliaResponse = await index.saveObjects(to_index);

    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search.
      Object IDs:\n${algoliaResponse.objectIDs.join("\n",)}`,
    );
  } catch (error) {
    console.log(error);
  }
})();