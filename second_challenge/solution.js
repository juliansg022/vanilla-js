fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    let todosObject = todos.filter((item) => item.title.includes("delectus"));
    let todosId = todosObject.reduce(
      (array, element) => array.concat(element.userId),
      []
    );

    let companies = fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );

    companies.then((users) => {
      let companyNames = users.filter((item) => todosId.includes(item.id));
      window.document.open();
      companyNames.forEach((item) => {
        window.document.write(item.company.name + "</br>");
      });
      window.document.close();
    });
  });
