
// Get some data (no extra arguments needed... just your URL.)
get(
    '/repos',
  {
    query: { type: "public", direction: "asc" },
    headers: { 'content-type': 'application/json' },
  
  },
  state => {
    return state;
  }
  );
  // Inspect it (the body of the response will be in state.data)
  fn(state => {
    console.log(state.data);
    return state;
  });
  
  // Do something with it (this one we need to talk about!)
  post('https://eo74fxd6rbaiwzb.m.pipedream.net', {
    body: {
      data: {},
       tag: 'testing-devtools'}
    },
  );