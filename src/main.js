import { Tarefa } from './models/tarefa.js';
import { TarefaView } from './view/tarefaView.js';

let t1 = new Tarefa('Fazer uma lista de exercicios sobre java');
let t2 = new Tarefa('Fazer o jantar');
let t3 = new Tarefa('Estudar linguagem C');
const tarefas = [t1, t2, t3];

let view = new TarefaView();
view.render(tarefas);
view.applyClick();