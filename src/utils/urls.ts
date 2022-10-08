// This variable is the one to change every 24hrs
// Pick the identifier here: https://crudcrud.com
const endpointIdentifier = "24107d677ecf4f2e87e7850d00185b40"

const BASE_URL = `https://crudcrud.com/api/${endpointIdentifier}`

export const API_ENDPOINT = (slug: string) => `${BASE_URL}/${slug}`
