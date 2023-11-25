export function cleanAndCapitaliseFirstLetterInString(string: string) {
  // Use a regular expression to split the string by spaces, dashes or underscores
  const capitalisedTypeNameWords = string.split(/[\s_-]+/);

  for (let i = 0; i < capitalisedTypeNameWords.length; i++) {
    capitalisedTypeNameWords[i] =
      capitalisedTypeNameWords[i].charAt(0).toUpperCase() +
      capitalisedTypeNameWords[i].slice(1);
  }

  return capitalisedTypeNameWords.join(' ');
}
