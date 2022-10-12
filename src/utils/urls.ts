// This variable is the one to change every 24hrs
// Get the identifier here: https://crudcrud.com
export const endpointIdentifier = "6705124f8e974416a0a401d4dff7bad5"

const BASE_URL = `https://crudcrud.com/api/${endpointIdentifier}`

export const API_ENDPOINT = (slug: string) => `${BASE_URL}/${slug}`
