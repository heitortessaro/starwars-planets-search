const fetchPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPlanets;
