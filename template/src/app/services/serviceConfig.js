import dotenv from "dotenv"

dotenv.config()
const config = {
    gdnURL: process.env.REACT_APP_GDN_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    githubURL: process.env.REACT_APP_GITHUB_REPO,
}

export default config
