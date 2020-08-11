//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click',cloneField)


//Executar uma ação
function cloneField(){
    //Duplicar campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos, Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o field do momento e limpa ele
        field.value = ""

    })

    //Colocar na página, onde?
    document.querySelector('#schedule-itens').appendChild(newFieldContainer)
   
}



