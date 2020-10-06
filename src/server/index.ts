import axios from 'axios';
import { current } from '../keys';

export const getCurrentCourse = async function() {
  try {
    const url: string = `https://openexchangerates.org/api/latest.json?app_id=${current}`;
    const response = await axios.get(url);
    return response.data;
  } catch(error) {
    throw new Error(error);
  }
}

