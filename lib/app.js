"use strict";

require("core-js/modules/es.promise.js");
const test = async () => {
  console.log("test");
  await fetch("http://google.com");
};
test();