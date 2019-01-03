import axios from 'axios'; 

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 0be306ebb6c280e5cfcab9e4066c1505bb39c3e35925cc959557ed2f5ff93753"
    }
}) 