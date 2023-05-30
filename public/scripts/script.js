const edits = document.querySelectorAll('.editarForm');

edits.forEach((botao) => {
  botao.addEventListener('click', function (e) {
    e.preventDefault();
    const li = this.parentElement.parentElement;
    const title = li.querySelector('.title');
    const description = li.querySelector('.description');
    const id = li.querySelector('.inputid');

    const infos = {
      title: title.innerText,
      description: description.innerText,
      id: id.value,
    };

    li.innerHTML = `
      <form action="/tasks/edit" method="post">
      <input type="hidden" name="id" value="${infos['id']}">
      <div class="form-control">
        <label for="title">Título:</label>
        <input type="text" name="title" id="title" placeholder="O que você vai fazer?" value="${infos['title']}">
      </div>
      <div class="form-control">
        <label for="description">Descrição:</label>
        <textarea name="description" id="description" placeholder="Descreva a tarefa...">${infos['description']}</textarea>
      </div>
      <div class="buttondiv">
        <button type="submit">Enviar Edição</button>
      </div>
    </form>
      `;

    console.log(infos['id']);
  });
});
