
var storage = {};

module.exports = function(key, value) {
	if(!value) return getter(key);
	setter(key, value);
};


function setter(key, value) {
	var model = storage[key] || factory(key, value);
	var nb =  (model.values[value] || 0) + 1;
	model.values[value] = nb;
	var max = model.values[model.entity];
	if(nb > max) storage[key].entity = value;
}

function factory(key, value) {
	var model = {
		entity: value,
		values: {}
	};
	storage[key] = model;
	return model;
}



function getter(key) {
	return storage[key].entity;
}
