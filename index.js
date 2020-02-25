var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = object.assign({},[key], value);
  return obj;
}