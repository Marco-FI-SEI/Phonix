export const makeRequest = async (method, url, body = "") => {
  let result;
  const config = buildConfig(method, body);

  try {
    result = await fetch(url, config)
    result = result.json()
  } catch (e) {
    console.log(e)
  };

  return result;
};

const buildConfig = (method, body = "") => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };
  if (body) config["body"] = JSON.stringify(body);

  return config;
}
