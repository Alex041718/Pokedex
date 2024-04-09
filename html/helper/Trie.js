class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false; // Pour marquer la fin d'un mot
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insérer un mot dans le trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true; // Marquer la fin du mot
    }

    // Rechercher dans le trie pour autocomplétion
    search(prefix) {
        let node = this.root;
        // Trouver le nœud du dernier caractère du préfixe
        for (let char of prefix) {
            if (!node.children[char]) {
                return []; // Préfixe non trouvé
            }
            node = node.children[char];
        }
        
        // Récupérer tous les mots avec ce préfixe
        return this._findAllWords(node, prefix);
    }

    // Helper pour trouver tous les mots à partir d'un noud donné
    _findAllWords(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }

        for (let char in node.children) {
            words = words.concat(this._findAllWords(node.children[char], prefix + char));
        }

        return words;
    }
}

// Utilisation
//const trie = new Trie();
//const words = ["Trombonnneee", "tracteur", "tomate", "toiture", "toilette", "alexandre","alex"]; // Votre liste de 1000 mots ici
//words.forEach(word => {trie.insert(word); console.log(word);});

//console.log(trie.search("to"));
