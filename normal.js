const http = require("axios");

// calling async functions

function normalfunction() {
  console.log("normal function");
  fetchUsers(1, 9);
  fetchUsers(2, 3);
  fetchUsers(3, 6);
}

normalfunction();

function fetchUsers(count, time) {
  setTimeout(() => {
    fetchNow(count, time);
  }, time * 1000);
}

async function fetchNow(count, time) {
  try {
    const { data } = await http.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    console.log(
      `sequence - ${count}, after - ${time} sec, data - ${data.length}`
    );
  } catch (error) {
    console.log("error ", error);
  }
}
