export const toTitleCase = (str) => {
  return str?.toLowerCase()?.replace(/(?:^|\s)\w/g, (match) => {
    return match?.toUpperCase();
  });
};

export const onlyFirstCap = (str) => {
    return str?.charAt(0)?.toUpperCase()+str?.slice(1);
}