# Run following Command -

```
npm run start
```

# result out -

```
generator function
sequence - 1, after - 9 sec, data - 10
sequence - 2, after - 3 sec, data - 10
sequence - 3, after - 6 sec, data - 10
normal function
sequence - 2, after - 3 sec, data - 10
sequence - 3, after - 6 sec, data - 10
sequence - 1, after - 9 sec, data - 10
```

# explaination -

using generator function you can sequentially run api call with sideeffects (api calls). we do not have control over how much time it takes to receive data from server and if multiple functions depend on data received from previous call then this could result into inconsistent data or could also result into error.

other way to solve this problem is by returnig and passing the promise to next function is sequence but this will require putting async on every function. generator function seems better solution.

# note -

I will modify the example code as I understand generator function more.
