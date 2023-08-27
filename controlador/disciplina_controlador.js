class DisciplinaControlador {

    constructor() {
        this._servico = new DisciplinaService();
    }

    inserirDisciplina() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nomeDisc");
        const disciplinaInserida = this._servico.inserirDisciplina(Number(codigoElemento.value), nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#lista_disciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirAluno() {
        const matriculaElemento = document.querySelector("#matricula");
        const nomeElemento = document.querySelector("#nomeAlu");
        const idadeElemento = document.querySelector("#idade");
        const alunoInserido = this._servico.inserirAluno(Number(matriculaElemento.value), nomeElemento.value, Number(idadeElemento.value));
        const listaAlunosElemento = document.querySelector("#lista_alunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina._codigo} - Nome: ${disciplina._nome}`;
        elementoDestino.appendChild(disciplinaElemento );
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Matrícula: ${aluno._matricula} - Nome: ${aluno._nome}`;
        elementoDestino.appendChild(alunoElemento);
    }
}