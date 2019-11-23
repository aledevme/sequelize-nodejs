const controller = {}
const Autores = require('../models/Autores')

controller.All = (req, res) => {
    Autores.findAll().then(autores=>{
        if(autores.length>0){
            res.json(
                {
                    status : 200,
                    data:autores
                }
            )
        }
        else{
            res.json(
                {
                    status : 500,
                    data:'No hay datos'
                }
            )
        }
    });
}
controller.createUser = (req, res) => {
    Autores.create(req.body).then(autor => {
        if(autor){  
            res.json(
                {
                    status:200,
                    data:'Autor creado correctamente'
                }
            )
        }
        else{
            res.json(
                {   
                    status:500,
                    data:'No se pudo crear el autor'
                }
            )
        }
    });
}
controller.findAuthor = (req,res) =>{
    Autores.findAll({
        where: {
          id: req.params.id
        }
    }).then((autor)=>{
        
        res.json(
            {
                status:200,
                data: autor
            }
        )
    });
}
controller.updateAutor = (req, res) => {
    console.log(req.body)
    Autores.update(
        req.body,
        {
        where: {
            id:req.params.id
        }
        }).then(() => {
            res.json(
                {
                    status:200,
                    data: 'Actualizado'
                }
            )
    });
    
}
controller.deleteActor = (req,res) => {
    
    Autores.destroy({
        where: {
          id: req.params.id
        }
    }).then((autor)=>{
        if(autor){
            res.json(
                {
                    status:200,
                    data:'Se elimino'
                }
            )
        }
    });
    
}
module.exports = controller