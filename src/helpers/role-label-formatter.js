const RIGHT_NAME_WORDS_SEPARATOR = "_";
const RIGHT_NAME_OMITTED_WORDS = ["gql", "mutation", "perms"];
const QUERY_STRING = "query";
const SEARCH_STRING = "search";
const WHITESPACE = " ";

const capitalizeFirstLetter = (string) => {
  return string.toLowerCase().replace(/^\w|\s\w/g, (letter) => letter.toUpperCase());
};

export const formatRoleLabel = (moduleName = "", permName = "") => {
  const rightNameWords = permName
    .split(RIGHT_NAME_WORDS_SEPARATOR)
    .filter((word) => !RIGHT_NAME_OMITTED_WORDS.includes(word));

  const rightNameLabel = rightNameWords
    .map(capitalizeFirstLetter)
    .join(WHITESPACE)
    .replace(QUERY_STRING, SEARCH_STRING);
  const moduleNameLabel = moduleName.split(RIGHT_NAME_WORDS_SEPARATOR).map(capitalizeFirstLetter).join(WHITESPACE);

  return `${moduleNameLabel} | ${rightNameLabel}`;
};
