export class Tarefa {
    #nome;
    #concluido = false;

    constructor(nome) {
        if (typeof nome !== 'string') {
            throw new Error('Favor fornecer um nome do tipo string para a sua tarefa');
        }
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    get concluido() {
        return this.#concluido;
    }

    set concluido(concluido) {
        if (typeof concluido !== 'boolean') {
            throw new Error('Favor informar um booleano');
        }
        this.#concluido = concluido;
    }
}