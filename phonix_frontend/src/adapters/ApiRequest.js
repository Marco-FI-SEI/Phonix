class ApiRequest {

  makeRequest = async (method, url, body = "") => {
    let result;
    const config = this.buildConfig(method, body);

    try {
      result = await fetch(url, config);
      result = result.json();
    } catch (e) {
      console.log(e)
      result = e;
    };

    return result;
  };

  buildConfig = (method, body) => {
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
}

export default ApiRequest;
