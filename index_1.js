//HARD 39. Write a function which converts string input into an object
    // ("a.b.c", "someValue");
    // {a: {b: {c: "someValue"}}}

    console.log(stringToObject("a.b.c", "someValue"));

    function stringToObject(path, value) {
  const keys = path.split(".");
  let result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = {};
      current = current[key];
    }
  }

  return result;
}

//convert {a: {b: {c: "someValue"}}} to   // ("a.b.c", "someValue");
    function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

const input = { a: { b: { c: "someValue" } } };
console.log(flattenObject(input));