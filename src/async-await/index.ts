const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));


// test melakukan ini
const mainAsync = async () => {
  await delay(1000);
  console.log("1s");
  await delay(2000);
  console.log("2s");
  await delay(3000);
  console.log("3s");
};

mainAsync();
