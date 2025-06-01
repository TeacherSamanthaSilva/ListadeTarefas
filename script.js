let tarefas = ["Estudar JavaScript", "Fazer exercícios", "Lavar a louça"];

tarefas.push("Ler um livro");

for (let i = 0; i < tarefas.length; i++) {
  console.log((i+1) + ". " + tarefas[i]);
}

tarefas.pop();

console.log(tarefas);