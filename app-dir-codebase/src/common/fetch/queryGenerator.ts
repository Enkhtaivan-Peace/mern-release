export function generateQuery(payload: any) {
  const queryParams = Object.entries(payload)
    .map(([key, value]) => {
      if (value) {
        if (key === "search") {
          return `search=${value}&searchField=${payload.fieldName}`;
        }
        if (key === "page" || key === "limit" || key === "sort") {
          return `${key}=${value}`;
        }
      }
      return null;
    })
    .filter(Boolean)
    .join("&");

  return queryParams ? `?sort=-createdAt&${queryParams}` : "";
}
