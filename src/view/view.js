export class View {
    elementRoot;

    constructor() {
        this.elementRoot = document.querySelector('#app');
        this.#renderMainStructure('Lista de tarefas');
    }

    render(data) {
        this.elementRoot.innerHTML += this.template(data);
    }

    template(data) {
        throw new Error('not implemented');
    }

    #renderMainStructure(content) {
        this.elementRoot.innerHTML = `
        <div class="container">
        <h1 class="text-center mt-5">${content}</h1>
        </div>
        `;
    }

}