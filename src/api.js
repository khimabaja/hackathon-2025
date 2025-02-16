const API_URL = "https://smrv02nmxk.execute-api.us-east-2.amazonaws.com/items";

async function getData() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function putItem(item) {

    const requestPayload = {
        id: item.id,
        price: item.price,
        name: item.name
    };

    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(API_URL, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(requestPayload)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}


export { getData, putItem };
