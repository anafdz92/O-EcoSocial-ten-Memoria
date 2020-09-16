const gerDataApi = () => {
  return fetch().then((response) => response.json());
};

export default getDataApi;
