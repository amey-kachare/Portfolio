export const gitInfoLoader = async () => {
    const response=await fetch('https://api.github.com/users/amey-kachare/repos')
    return response.json()
}