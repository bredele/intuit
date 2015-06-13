
/**
 * Persistent storage.
 * @note we should use local storage
 * or indexdb.
 */

var storage = {};


/**
 * Predictive analytics.
 * 
 * Examples:
 *
 *   intuit('glasses', 'view');
 *   intuit('glasses', 'sun');
 *   intuit('glasses', 'sun');
 *   
 *   intuit('glasses'); 
 *   //=> sun
 *   
 * @param  {String} key  
 * @param  {Atring} value
 * @return {String}      
 * @api public
 */

module.exports = function(key, value) {
	if(!value) return storage[key].entity
	setter(key, value);
};


/**
 * Setter.
 *
 * Increment the number of times a value
 * has been set and also calculate the preferred
 * value.
 * 
 * @param  {String} key   
 * @param  {String} value   
 * @api private
 */

function setter(key, value) {
	var model = storage[key] || factory(key, value);
	var nb =  (model.values[value] || 0) + 1;
	model.values[value] = nb;
	if(nb > model.values[model.entity]) storage[key].entity = value;
}


/**
 * Create data representation of
 * and unknown key.
 * 
 * @param  {String} key
 * @param  {String} value 
 * @return {Object}
 * @api private
 */

function factory(key, value) {
	var model = {
		entity: value,
		values: {}
	};
	storage[key] = model;
	return model;
}

