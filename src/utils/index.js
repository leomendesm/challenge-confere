export const APIURL = "https://knowledge.skore.io/workspace/"
export const AuthToken = process.env.AUTHORIZATION
export const config = {
    headers: {'Authorization': AuthToken}
};
