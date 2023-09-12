class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.first = min;
        this.last = max;
    };

    guess() {
        this.mid = Math.round((this.last + this.first) / 2);
        return this.mid;
    };

    lower() {
        this.last = this.mid;
    };
    
    greater() {
        this.first = this.mid;
    };
};

module.exports = GuessingGame;
