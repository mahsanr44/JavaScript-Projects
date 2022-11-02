String.prototype.reverse = function() {
    let revert = "";
    for (let i = 0; i < this.length; i++) {
        revert = this[i] + revert;
    }
    return revert;
}
console.log("Ahsan".reverse());