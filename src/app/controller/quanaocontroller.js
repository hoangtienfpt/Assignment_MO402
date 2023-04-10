const quanaomodel = require('./../../model/quanaomodel')



class  quanaocontroller{
    async index(req , res , next){
       quanaomodel.find({})
       .then(quanaos=>{
        quanaos = quanaos.map(quanao=>quanao.toObject())
      
        res.render('home3' , {layout:'main',quanaos})
       }).catch(err=>next(err))
    }


    add(req , res , next){
            const newquanao = new quanaomodel(req.body)
            console.log(req.body)
            newquanao.save()
            .then(()=>res.redirect('/trangchu'))
            .catch(err=>{})

        
    }
    show(req , res , next){
        quanaomodel.findOne({_id:req.params.id})
                .then(quanaos=>{
                    res.send(quanaos.toJSON())
                })
                .catch(err=>next(err))
    }
    edit(req , res , next){
        quanaomodel.findById({_id:req.params.id})
        .then(quanaos=>{
        quanaos = quanaos?quanaos.toObject():quanaos

         res.render('home' , {layout:'add' , quanaos } )
     
        }).catch(err=>next(err))
     }

     update(req , res , next){
 
        quanaomodel.updateOne({_id:req.params.id} , req.body)
        .then(()=>res.redirect('/trangchu'))
        .catch(err=>{
        })
       }
    delete(req , res , next){
        quanaomodel.deleteOne({_id:req.params.id})
        .then(()=>{res.redirect('/trangchu')})
        .catch(err=>next(err))
     }
}
module.exports = new quanaocontroller