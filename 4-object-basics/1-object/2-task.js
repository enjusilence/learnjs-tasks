let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNumeric = (obj) => {
  for (let key in menu) {
    obj[key] *= 2;
  }
}

multiplyNumeric(menu);