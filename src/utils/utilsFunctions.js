export const getQueryStringParams = (query) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params, param) => {
          let [key, value] = param.split("=");
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, " "))
            : "";
          return params;
        }, {})
    : {};
};

const filterTitle = (data, filter) => {
  if (filter.q === undefined) return data;
  return data.filter((search) => search.title.includes(filter.q));
};

const fitlerCompany = (data, filter) => {
  if (filter.co === undefined) return data;
  return data.filter((search) => search.companies.includes(filter.co));
};

const fitlerPosition = (data, filter) => {
  if (filter.pos === undefined) return data;
  return data.filter((search) => search.positions.includes(filter.pos));
};

export const filterData = (data, filter) => {
  let newData = filterTitle(data, filter);
  newData = fitlerCompany(newData, filter);
  newData = fitlerPosition(newData, filter);
  return newData;
};
