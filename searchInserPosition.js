var searchInsert = function (nums, target) {
	let pivot = target;
	let listL = [];
	let listR = [];
	let listTar = [target];

	for (let i = 0; i < nums.length; i++) {
		if (pivot === nums[i]) {
			return nums.indexOf(nums[i]);
		} else if (nums[i] < pivot) {
			listL.push(nums[i]);
		} else if (nums[i] > pivot) {
			listR.push(nums[i]);
		}
	}

	let fullList = listL.concat(listTar).concat(listR);

	return fullList.indexOf(pivot);
};
