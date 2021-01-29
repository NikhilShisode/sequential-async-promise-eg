const http = require("axios");

// calling async functions
function normalfunction() {
  console.log("normal function");
  const t1 = new Date();

  fetchUsers(1, 9, t1);
  fetchUsers(2, 3, t1);
  fetchUsers(3, 6, t1);
}

function fetchUsers(count, time, t1) {
  setTimeout(() => {
    fetchNow(count, time, t1);
  }, time * 1000);
}

async function fetchNow(count, time, t1) {
  try {
    const { data } = await http.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    const t2 = new Date();
    const diff = (t2.getTime() - t1.getTime()) / 1000;
    console.log(
      `sequence - ${count}, time required- ${time} sec, data received after - ${diff} sec, data - ${data.length}`
    );
  } catch (error) {
    console.log("error ", error);
  }
}

normalfunction();
