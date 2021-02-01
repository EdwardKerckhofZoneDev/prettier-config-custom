#!/usr/bin/env node
const path = require("path");
const { writeFile } = require("fs").promises;

(async () => {
  const prettierrc = path.join(process.cwd(), ".prettierrc");

  const config = {
    useTabs: false,
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    trailingComma: "none",
  };

  await writeFile(prettierrc, JSON.stringify(config));

  console.log(".prettierrc successfully created");
})();
