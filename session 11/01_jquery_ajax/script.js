$("#clickme").click(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json => console.log(json))
        .then(() => {
            alert('done');
        });
        
    alert('here!!!!');
})

$("#send").click(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', 
    {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        id: 300
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.json())
  .then(json => console.log(json))
})