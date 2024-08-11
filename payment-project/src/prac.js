Array.prototype.last = function () {
    if(!this.length)
        return -1;
    return this[this.length-1];
}

const x = [1,2];
console.log(x.last());