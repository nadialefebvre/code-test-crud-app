// This variable is the one to change every 24hrs
// Get the identifier here: https://crudcrud.com
export const endpointIdentifier = "c35abc5e3dac49bfaf7a73083232d8bd"

const BASE_URL = `https://crudcrud.com/api/${endpointIdentifier}`

export const API_ENDPOINT = (slug: string) => `${BASE_URL}/${slug}`
