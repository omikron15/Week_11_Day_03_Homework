var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		results = [];
		arr.forEach(function (number){
			 results.push(number*number)
		})
		return results;
	},

	sum: function (arr) {
		results = 0;
		arr.forEach(function (number){
			 results += number;
		})
		return results;

	},

	findDuplicates: function (arr) {

	var results = [];
	arr.forEach(function(num, i){
		if (arr.indexOf(num, i + 1)> -1){
			if (results.indexOf(num) === -1){
				results.push(num)
			}
		}
	})
return results;
	},

	removeAndClone: function (arr, valueToRemove) {

		var results = [];
		arr.forEach(function(num){
			if(num !== valueToRemove){
				results.push(num);
			}
		})
		return results;
	},

	findIndexesOf: function (arr, itemToFind) {
		var results = [];
		arr.forEach(function(num, index){
			if(num == itemToFind){
				results.push(index);
			}
		})
		return results;

	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var result = 0;
		arr.forEach(function(num){
			if(num % 2 === 0){
				result += (num*num);
			}
		})

			return result;
	}

}

module.exports = arrayTasks
