function HashTable(size){
	this.table = Array(size);
	this.length = size;
}
function HashNode(key, value){
	this.key = key;
	this.value = value;
	this.next = null;
}
HashTable.prototype.hash = function(key) {
	let complement = 0;
	key.split('').forEach(function(char){
		complement += char.charCodeAt(0);
	});

	return complement % this.length;
};
HashTable.prototype.insert = function(key, value) {
	let iHash = this.hash(key),
		node = this.table[iHash];

	if(!node) node = new HashNode(key, value); // create
	else if(node.key === key) node.value = value; // update
	else{
		node = node.next;
		while(node){
			if(node.key == key) node.value = value;
			else node = node.next;
		}

		node = new HashNode(key, value);
	}

};
HashTable.prototype.get = function(key) {
	let iHash = this.hash(key),
		node = this.table[iHash];
	while(node){
		if(node.key === key) return node.value;
		node = node.next;
	}

	return null;
};
HashTable.prototype.getAll = function() {
	let all = new Array();

	this.table.forEach(function(node){
		all.push(node.value);
		let next = node.next;
		while(next){
			all.push(next.value);
			next = next.next;
		}
	});

	return all;
};