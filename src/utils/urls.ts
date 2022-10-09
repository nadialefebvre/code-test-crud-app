// This variable is the one to change every 24hrs
// Pick the identifier here: https://crudcrud.com
export const endpointIdentifier = ""

const BASE_URL = `https://crudcrud.com/api/${endpointIdentifier}`

export const API_ENDPOINT = (slug: string) => `${BASE_URL}/${slug}`
