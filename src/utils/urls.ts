// This variable is the one to change every 24hrs
// Pick the identifier here: https://crudcrud.com
const endpointIdentifier = "9e2f44e810004787a6aa9ed3280a43ae"

const BASE_URL = `https://crudcrud.com/api/${endpointIdentifier}`

export const API_ENDPOINT = (slug: string) => `${BASE_URL}/${slug}`
