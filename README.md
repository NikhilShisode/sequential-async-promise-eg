# Run following Command -

```
npm run start
```

# result out -

```
generator function
sequence - 1, time required- 9 sec, data received after - 9.287 sec, data - 10
sequence - 2, time required- 3 sec, data received after - 12.562 sec, data - 10
sequence - 3, time required- 6 sec, data received after - 18.854 sec, data - 10
normal function
sequence - 2, time required- 3 sec, data received after - 3.311 sec, data - 10
sequence - 3, time required- 6 sec, data received after - 6.268 sec, data - 10
sequence - 1, time required- 9 sec, data received after - 9.287 sec, data - 10
```

# explaination -

using generator function you can sequentially run api call with sideeffects (api calls). we do not have control over how much time it takes to receive data from server and if multiple functions depend on data received from previous call then this could result into inconsistent data or could also result into error.

other way to solve this problem is by returnig and passing the promise to next function is sequence but this will require putting async on every function. generator function seems better solution.

# note -

I will modify the example code as I understand generator function more.
