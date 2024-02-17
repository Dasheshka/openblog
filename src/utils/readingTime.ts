export const readingTime = (body: string) => {
  const words = body.match(/\w+/g);

  return words ? `${Math.ceil(words.length / 150)} min read` : "";
};
