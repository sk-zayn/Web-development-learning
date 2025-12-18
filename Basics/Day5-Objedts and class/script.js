let data = "secret information"; //crated a class
class user {
  constructor(name, email) {
    //constructor is the default property of object if not define here i defiend constructor
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data = ", data); //created a function in the class
  }
}

let student1 = new user("zain", "zain@gmail.com"); //making student1 an object of the class
let student2 = new user("zaid", "zaid@gmail.com"); //this details will go in the constructor so we have to give arguments here as our constructor has parameters and it is expecting a value

console.log(student1);
console.log(student2);

student1.viewData(); //student1 can access functions in class cause we made student1 an object of the class


function download(url) {
  return new Promise((resolve, reject) => {
    console.log("Download started from:", url);
    setTimeout(() => {
      console.log("Download completed");
      const content = "ABCDEFGH";
      resolve(content);
    }, 3000);
  });
}
function writeFile(content) {
  return new Promise((resolve, reject) => {
    console.log("Writing data to file:", content);
    setTimeout(() => {
      console.log("Writing completed");
      const filename = "text.txt";
      resolve(filename);
    }, 3000);
  });
}
function uploadFile(filename) {
  return new Promise((resolve, reject) => {
    console.log("Upload started for:", filename);
    setTimeout(() => {
      console.log("Upload completed");
      resolve("Success");
    }, 3000);
  });
}

// Promise Chaining
download("www.cat.com")
  .then((res) => {
    console.log("Downloaded content:", res);
    return writeFile(res);
  })
  .then((res) => {
    console.log("File created:", res);
    return uploadFile(res);
  })
  .then((res) => {
    console.log("File upload status:", res);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
