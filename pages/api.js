const baseURL = "http://localhost:8000"

// Function to handle login
async function login(email, password) {
    try {
        const response = await axios.post(`${baseURL}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

// Function to handle signup
async function signup(name, email, password) {
    try {
        const response = await axios.post(`${baseURL}/signup`, { name, email, password });
        return response.data;
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
}

// Function to get results
async function getResults() {
    try {
        const response = await axios.get(`${baseURL}/results`);
        return response.data;
    } catch (error) {
        console.error('Error getting results:', error);
        throw error;
    }
}

// Function to register results
async function registerResults(patientData) {
    try {
        const response = await axios.post(`${baseURL}/results`, patientData);
        return response.data;
    } catch (error) {
        console.error('Error registering results:', error);
        throw error;
    }
}

// Function to predict
async function predict(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post(`${baseURL}/predict`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error during prediction:', error);
        throw error;
    }
}