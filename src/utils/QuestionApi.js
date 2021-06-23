import API_URL from './constants';

async function getQuestions() {
  const request = await fetch(API_URL);
  const res = await request.json();
  return res;
}

export default getQuestions;
