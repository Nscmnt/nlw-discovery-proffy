const Database = require('./db')
const createProffy = require('./createProffy')



Database.then(async(db)=>{
    //Inserir dados
    proffyValue ={
        name: "Diego fernandes", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:'11952454475',
        bio: 'Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas',
        
    }

    classValue = {
    subject: "Química",
    cost: "20",
     // proffy_id vira pelo db
    }

    classScheduleValues = [

        //class_id vira pelo db após cadastro da aula
        {
        weekday: 1,
        time_from:720,
        time_to:1220,

        },
        {
            weekday: 0,
            time_from:520,
            time_to:1220,
    
        }
    ]

   await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inseridos
})