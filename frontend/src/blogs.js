import axios from 'axios'
async function fetchData() {
  try {
    const response = await fetch("https://32d5uh-8080.csb.app/api");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function fetchSum(num1,num2) {
  try {
    const response = await axios.post("https://32d5uh-8080.csb.app/api/sum", { num1, num2 });
    return response.data.sum;
  } catch (error) {
    console.log(error);
  }
}
export default fetchData;
export {fetchSum};