const file = require("fs");
// // async
// file.writeFile("./text2.txt", "just do it bro", (err) => {
//   console.log("error");
// });
// //sync
// file.writeFileSync("./text2.txt", "just do it bro", (err) => {
//   console.log("error");
// });

// once the readfile task is completed the callback function will be executed in the main thread

file.readFile("./files/text.txt", "utf-8", (error, data1) => {
  if (error) {
    throw new Error("This is an error", error);
  }
  file.readFile("./files/text2.txt", "utf-8", (error2, data2) => {
    if (error2) {
      throw new Error("This is an error", error2);
    }
    console.log({ data2 });
    file.readFile("./files/append.txt", "utf-8", (error3, data3) => {
      if (error) {
        throw new Error("This is an error", error3);
      }
      file.writeFile(
        "./files/append.txt",
        `${data1} ${data2}  ${new Date()}`,
        (err) => {
          if (err) {
            throw new Error("This is an error", err);
          }
        }
      );
    });
  });
});
