class GuessingGame {
    constructor() {
        this.arr = [];
        this.mediumNumber;
    }

    setRange(min, max) {
        for(let i = min; i <= max; i++) {
            this.arr.push(i);
        }
    }

    guess() {
        this.mediumNumber = this.arr[Math.floor(this.arr.length / 2)];
        return this.mediumNumber;
    }

    lower() {
        this.arr = this.arr.filter(item => item <= this.mediumNumber);
    }

    greater() {
        this.arr = this.arr.filter(item => item >= this.mediumNumber);
    }
}

module.exports = GuessingGame;
