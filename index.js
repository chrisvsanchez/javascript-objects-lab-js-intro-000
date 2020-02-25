function updateObjectWithKeyAndValue(object, key, value){
  object.assign({},[key], value);
  return object;
}