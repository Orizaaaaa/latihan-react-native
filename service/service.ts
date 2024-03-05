export const getProfile = (callback: any) => {
    const url = 'https://reqres.in/api/users/1';
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((err) => {
            console.error('Error fetching data:', err);
        });
};
