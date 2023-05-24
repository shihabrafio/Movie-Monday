const getShowById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
};
export default getShowById;
