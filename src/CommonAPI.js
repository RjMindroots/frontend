import base_url from "./Config";

const postMethod = async(propsData) => {
        const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(propsData.values)
        }
    try {
        let resp = await fetch(`${base_url}/${propsData.url}`, data);
        let response = await resp.json();
        return response;
      } catch (error) {
        console.error(error);
      }
}

export default postMethod