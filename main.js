const http = require("axios");

// calling async functions sequential

const iterator = generatorFunction();

function* generatorFunction() {
  console.log("generator function");
  const t1 = new Date();
  yield fetchUsers(1, 9, t1, iterator);
  yield fetchUsers(2, 3, t1, iterator);
  yield fetchUsers(3, 6, t1, iterator);
}

function fetchUsers(count, time, t1, _iterator) {
  setTimeout(() => {
    fetchNow(count, time, t1, _iterator);
  }, time * 1000);
}

async function fetchNow(count, time, t1, _iterator) {
  try {
    const { data } = await http.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    const t2 = new Date();
    const diff = (t2.getTime() - t1.getTime()) / 1000;
    console.log(
      `sequence - ${count}, time required- ${time} sec, data received after - ${diff} sec, data - ${data.length}`
    );
    _iterator.next();
  } catch (error) {
    console.log("error ", error);
  }
}

iterator.next();
