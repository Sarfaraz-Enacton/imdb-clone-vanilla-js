import { config } from "../../../config";

export default async function fetchApi(url, dataFunc) {
  try {
    // console.log(url);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${config.bearer_token}`,
      },
    };

    const res = await fetch(url, options);
    if (res.status !== 200) {
      console.error("Error", res.status);
      return;
    }
    const data = await res.json();
    const { results } = data;
    // console.log(results);
    return dataFunc(results);
  } catch (err) {
    console.error("Error", err);
  }
}

// fetch(apiUrl, options)
//   .then((res) => {
//     if (res.status !== 200) {
//       console.error("Error:" + res.status);
//       return;
//     }
//     return res.json();
//   })
//   .then((data) => {
//     const { results } = data;
//     return console.log(results[0]) || CardComponent(results);
//   })
//   .catch((err) => {
//     console.error("Error:" + err);
//   });
