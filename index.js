var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var new obj = object.assign({},[key], value);
  return obj;
}