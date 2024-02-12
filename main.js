
(() => {

  const services = {
    "services": [
      {
        "id": 1,
        "head": null,
        "name": "Проф.осмотр",
        "node": 0,
        "price": 100.0,
        "sorthead": 20
      },
      {
        "id": 2,
        "head": null,
        "name": "Хирургия",
        "node": 1,
        "price": 0.0,
        "sorthead": 10
      },
      {
        "id": 3,
        "head": 2,
        "name": "Удаление зубов",
        "node": 1,
        "price": 0.0,
        "sorthead": 10
      },
      {
        "id": 4,
        "head": 3,
        "name": "Удаление зуба",
        "node": 0,
        "price": 800.0,
        "sorthead": 10
      },
      {
        "id": 5,
        "head": 3,
        "name": "Удаление 8ого зуба",
        "node": 0,
        "price": 1000.0,
        "sorthead": 30
      },
      {
        "id": 6,
        "head": 3,
        "name": "Удаление осколка зуба",
        "node": 0,
        "price": 2000.0,
        "sorthead": 20
      },
      {
        "id": 7,
        "head": 2,
        "name": "Хирургические вмешательство",
        "node": 0,
        "price": 200.0,
        "sorthead": 10
      },
      {
        "id": 8,
        "head": 2,
        "name": "Имплантация зубов",
        "node": 1,
        "price": 0.0,
        "sorthead": 20
      },
      {
        "id": 9,
        "head": 8,
        "name": "Коронка",
        "node": 0,
        "price": 3000.0,
        "sorthead": 10
      },
      {
        "id": 10,
        "head": 8,
        "name": "Слепок челюсти",
        "node": 0,
        "price": 500.0,
        "sorthead": 20
      }
    ]
  }

  const servicesArr = Array.from(services.services);
  const rootDir = createRootDir();

  function createDir(ul, headVal) {
    servicesArr.sort((a, b) => a.sorthead > b.sorthead ? 1 : -1);
    servicesArr.forEach((obj) => {
      if (obj.head == headVal) {
        const li = document.createElement('li');
        li.setAttribute("id", obj.id);
        li.classList.add('list-group-item', 'border-0');
        li.textContent = `${obj.name} ${obj.price}`;
        ul.append(li);
        ul.classList.add('list-group', 'border-bottom', 'border-left');
      }
    });
  }

  function createRootDir() {
    const rootUl = document.createElement('ul');
    createDir(rootUl, null);

    return { rootUl };
  }

  function createInnerDirs() {
    Array.from(rootDir.rootUl.children).forEach((li) => {
      const innerUl = document.createElement('ul');
      createDir(innerUl, li.id);
      li.append(innerUl);
      Array.from(innerUl.children).forEach((li) => {
        const innerUl = document.createElement('ul');
        createDir(innerUl, li.id);
        li.append(innerUl);
      });
      console.log(innerUl);
    });
  }

  function createPage(container) {
    container.append(rootDir.rootUl);
    createInnerDirs();
  }
  createPage(container);
})();
