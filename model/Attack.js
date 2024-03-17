class Attack {
    // Dictionary of all attacks
    static all_attacks = {};

    constructor(nameMove, data){
        this.nameMove = nameMove;
        this.data = data;

        Attack.all_attacks[nameMove] = this;
    }
}