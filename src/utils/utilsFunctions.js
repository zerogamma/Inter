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
  const filters = filter.co.split(",");
  return data.filter((search) => {
    let check = true;
    filters.forEach((filt) => {
      if (check === false) return false;
      return (check = search.companies.includes(filt));
    });
    return check;
  });
};

const fitlerPosition = (data, filter) => {
  if (filter.pos === undefined) return data;
  const filters = filter.pos.split(",");
  return data.filter((search) => {
    let check = true;
    filters.forEach((filt) => {
      if (check === false) return false;
      return (check = search.positions.includes(filt));
    });
    return check;
  });
};

export const filterData = (data, filter) => {
  let newData = filterTitle(data, filter);
  newData = fitlerCompany(newData, filter);
  newData = fitlerPosition(newData, filter);
  return newData;
};
