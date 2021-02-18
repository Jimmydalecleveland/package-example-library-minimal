function secondModule() {
  const result = helper();
  return result;
}

function helper() {
  return "example helper being used by secondModule default export";
}

export default secondModule;
