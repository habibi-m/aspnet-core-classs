let resp = undefined;
/**
 * TODO: Register New Employee
 */
$("#registerEmpFrom").submit((e) => {
  e.preventDefault();

  let url = 'http://dummy.restapiexample.com/api/v1/create';
  
  let data = 
  {
    name: $("#empName").val(),
    salary: $("#salary").val(),
    age: $("#age").val()
  }

  fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      if (!response.ok)
        throw Error(response.statusText);
      else return response.json();
    })
    .then(json => $("#registerOutput").text(JSON.stringify(json)))
    .catch((error) => {
      console.log(error);
    });
})



/**
 * TODO: Fetch One Employee
 */
$("#readEmpFrom").submit((e) => {
  e.preventDefault();

  let employeeId = $("#employeeId").val();

  let url = 'http://dummy.restapiexample.com/api/v1/employee/' + employeeId;

  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(json => $("#readOutput").text(JSON.stringify(json)));
})



/**
 * TODO: Get All Employees
 */
$("#getAllEmpFrom").submit((e) => {
  e.preventDefault();

  let url = 'http://dummy.restapiexample.com/api/v1/employees';

  fetch(url)
    .then(response => response.json())
    .then(json => $("#getAllOutput").text(JSON.stringify(json)));
})