const quotesService = async () => {
  const res = await fetch(`https://api.quotable.io/random`);
  const resJson = await res.json();

  if (!res.ok) {
    throw new Error(`could not fetch, status:${res.status}`);
  }

  return {
    adviceId: resJson.length,
    content: resJson.content,
    author: resJson.author,
  };
};

export default quotesService;
