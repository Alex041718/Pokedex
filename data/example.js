// exemple Pokemon Class

p1 = {
    id: 1,
    name: "Bulbasaur",
    base: {
        attack: 118,
        defense: 111,
        stamina: 128
    },
    form: "normal",
    type: [
        "Grass",
        "Poison"
    ],
    moves: {
        charged_moves: [
            {
                "critical_chance": 0.05,
                "duration": 2300,
                "energy_delta": -50,
                "move_id": 90,
                "name": "Sludge Bomb",
                "power": 80,
                "stamina_loss_scaler": 0.09,
                "type": "Poison",
                effectiveness : {
                    "Bug": 1.0,
                    "Dark": 1.0,
                    "Dragon": 1.0,
                    "Electric": 1.0,
                    "Fairy": 1.6,
                    "Fighting": 1.0,
                    "Fire": 1.0,
                    "Flying": 1.0,
                    "Ghost": 0.625,
                    "Grass": 1.6,
                    "Ground": 0.625,
                    "Ice": 1.0,
                    "Normal": 1.0,
                    "Poison": 0.625,
                    "Psychic": 1.0,
                    "Rock": 0.625,
                    "Steel": 0.390625,
                    "Water": 1.0
                }
            },
            {
                "critical_chance": 0.05,
                "duration": 2100,
                "energy_delta": -33,
                "move_id": 59,
                "name": "Seed Bomb",
                "power": 55,
                "stamina_loss_scaler": 0.08,
                "type": "Grass",
                effectiveness : {
                    "Bug": 0.625,
                    "Dark": 1.0,
                    "Dragon": 0.625,
                    "Electric": 1.0,
                    "Fairy": 1.0,
                    "Fighting": 1.0,
                    "Fire": 0.625,
                    "Flying": 0.625,
                    "Ghost": 1.0,
                    "Grass": 0.625,
                    "Ground": 1.6,
                    "Ice": 1.0,
                    "Normal": 1.0,
                    "Poison": 0.625,
                    "Psychic": 1.0,
                    "Rock": 1.6,
                    "Steel": 0.625,
                    "Water": 1.6
                },
            },
            {
                "duration": 2600,
                "energy_delta": -50,
                "move_id": 118,
                "name": "Power Whip",
                "power": 90,
                "stamina_loss_scaler": 0.12,
                "type": "Grass",
                effectiveness : {
                    "Bug": 0.625,
                    "Dark": 1.0,
                    "Dragon": 0.625,
                    "Electric": 1.0,
                    "Fairy": 1.0,
                    "Fighting": 1.0,
                    "Fire": 0.625,
                    "Flying": 0.625,
                    "Ghost": 1.0,
                    "Grass": 0.625,
                    "Ground": 1.6,
                    "Ice": 1.0,
                    "Normal": 1.0,
                    "Poison": 0.625,
                    "Psychic": 1.0,
                    "Rock": 1.6,
                    "Steel": 0.625,
                    "Water": 1.6
                },
            }
        ],
        elite_charged_moves: [],
        elite_fast_moves: [],
        fast_moves: [
            {
                "duration": 600,
                "energy_delta": 6,
                "move_id": 214,
                "name": "Vine Whip",
                "power": 7,
                "stamina_loss_scaler": 0.01,
                "type": "Grass",
                effectiveness : {
                    "Bug": 0.625,
                    "Dark": 1.0,
                    "Dragon": 0.625,
                    "Electric": 1.0,
                    "Fairy": 1.0,
                    "Fighting": 1.0,
                    "Fire": 0.625,
                    "Flying": 0.625,
                    "Ghost": 1.0,
                    "Grass": 0.625,
                    "Ground": 1.6,
                    "Ice": 1.0,
                    "Normal": 1.0,
                    "Poison": 0.625,
                    "Psychic": 1.0,
                    "Rock": 1.6,
                    "Steel": 0.625,
                    "Water": 1.6
                },
            },
            {
                "duration": 500,
                "energy_delta": 5,
                "move_id": 221,
                "name": "Tackle",
                "power": 5,
                "stamina_loss_scaler": 0.01,
                "type": "Normal",
                effectiveness : {
                    "Bug": 1.0,
                    "Dark": 1.0,
                    "Dragon": 1.0,
                    "Electric": 1.0,
                    "Fairy": 1.0,
                    "Fighting": 1.0,
                    "Fire": 1.0,
                    "Flying": 1.0,
                    "Ghost": 0.390625,
                    "Grass": 1.0,
                    "Ground": 1.0,
                    "Ice": 1.0,
                    "Normal": 1.0,
                    "Poison": 1.0,
                    "Psychic": 1.0,
                    "Rock": 0.625,
                    "Steel": 0.625,
                    "Water": 1.0
                }
        }
        ]
    },
}