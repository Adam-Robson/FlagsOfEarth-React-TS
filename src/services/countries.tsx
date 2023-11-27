import { client } from './client';

export async function fetchAllCountries() {
  try {
    const response = await client
      .from('countries')
      .select('*')
      .order('name');

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`There was an error while retrieving the data, in the catch block: ${error.message}`);
    } else {
      console.error(`There was an error while retrieving the data, that is not an "Error": ${error}`);
    }
    return null;
  }
}
