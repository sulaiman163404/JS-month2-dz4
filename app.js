
const request = new XMLHttpRequest();
request.open('GET', 'people.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();
request.onload = () => {
    if (request.status === 200) {
        const info = JSON.parse(request.responseText);
        console.log(info);
        document.querySelector('.people').innerHTML = JSON.stringify(info);
    } else {
        console.error('Ошибка запроса:', request.status);
    }
};

