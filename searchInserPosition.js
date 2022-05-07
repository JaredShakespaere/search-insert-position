var searchInsert = function (nums, target) {
	let pivot = target;
	let listL = [];
	let listR = [];

	for (let i = 0; i < nums.length; i++) {
		if (pivot === nums[i]) {
			return nums.indexOf(nums[i]);
		} else if (nums[i] < pivot) {
			listL.push(nums[i]);
		} else if (nums[i] > pivot) {
			listR.push(nums[i]);
		}
	}

	console.log(`listL: ${listL}, listR: ${listR}`);
};
