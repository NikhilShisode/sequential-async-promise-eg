const http = require("axios");

// calling async functions sequential

const iterator = generatorFunction();

function* generatorFunction() {
  console.log("generator function");

  yield fetchUsers(1, 9, iterator);
  yield fetchUsers(2, 3, iterator);
  yield fetchUsers(3, 6, iterator);
}

function fetchUsers(count, time, _iterator) {
  setTimeout(() => {
    fetchNow(count, time, _iterator);
  }, time * 1000);
}

async function fetchNow(count, time, _iterator) {
  try {
    const { data } = await http.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    console.log(
      `sequence - ${count}, after - ${time} sec, data - ${data.length}`
    );
    _iterator.next();
  } catch (error) {
    console.log("error ", error);
  }
}

iterator.next();
