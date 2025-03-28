{
  let msg: unknown = "hello world";
  msg = 123;
  // if (typeof msg === "number") {
  //   let total = msg + 10;
  // }
  let total = (msg as number) + 10;
}
