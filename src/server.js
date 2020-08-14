//Dados
const proffys = [
    {name: "Diego fernandes", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:'11952454475',
    bio: 'Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas',
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from:[720],
    time_to:[1220],
},

{name: "Nascimento", 
    avatar:"https://avatars3.githubusercontent.com/u/62806739?s=460&u=33d673930afa27361d44407d6e4937e9a626320f&v=4",
    whatsapp:'11952454475',
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas',
    subject: "Química",
    cost: "20",
    weekday: [1],
    time_from:[720],
    time_to:[1220],
}
]

const subjects = [
'Artes',
'Biologia',
'Ciências',
'Educação',
'Física',
'Geografia',
'História',
'Matemática',
'Português',
'Química',
]

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]

//Funcionalidades
function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy( req, res){
    const filters = req.query;

    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const dados = req.query
    //Adcionar dados a lista proffys
    console.log(dados)
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

// Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

server
// Configurar arquivos estaticos ( css, script, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)



