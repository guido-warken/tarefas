import { View } from './view.js';

export class TarefaView extends View {

    constructor() {
        super();
        this.elementRoot = document.querySelector('.container');
    }

    template(data) {
        return `        <ul class="list-group mt-3">
    ${data.map((t, posicao) => {
            return `            <li class="list-group-item d-flex justify-content-between align-items-center" id="tarefa-${posicao + 1}">
        ${t.nome}
        <button type="button" class="btn btn-success" id="btn-tarefa-${posicao + 1}">Não concluído</button>
    </li>
`
        }).join('')
            }
    </ul>
    `;

    }

    applyClick() {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => this.#toggleConcluido(btn));
        });
    }

    #toggleConcluido(element) {
        if (element.parentElement.classList.contains('concluido')) {
            element.parentElement.classList.remove('concluido');
            element.textContent = 'não concluído';
        } else {
            element.parentElement.classList.add('concluido');
            element.textContent = 'concluído';
        }
    }
}