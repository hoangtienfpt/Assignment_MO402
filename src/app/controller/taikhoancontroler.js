const taikhoanmodel = require('./../../model/taikhoan')



class  taikhoancontroller{
 index(req , res , next){
       taikhoanmodel.find({})
       .then(taikhoans=>{
        taikhoans = taikhoans.map(taikhoan=>taikhoan.toObject())
      
        res.render('home3' , {layout:'user' , taikhoans})
       }).catch(err=>next(err))
    }


    singup(req , res , next){
          res.render('home2' , {layout:'singup'})
    }
    login(req , res , next){
        res.render('home3' , {layout:'login'})
    }
 
    add(req , res , next){
  
        const newaccount = new taikhoanmodel(req.body)
            console.log(req.body)
            newaccount.save()
            .then(()=>res.redirect('/trangchu'))
            .catch(err=>{})

    }
    show(req , res , next){
        taikhoanmodel.findOne({_id:req.params.id})
                .then(taikhoans=>{
                    res.send(taikhoans.toJSON())
                })
                .catch(err=>next(err))
    }



    checklogin(req , res , next){
        let email = req.query.email;
    let pass = req.query.password;
    let check = false
    taikhoanmodel.find({}).then(data_use => {
      data_use = data_use.map(data=>data.toObject());
      console.log(data_use);
        for (let i = 0; i < data_use.length; i++) {
            if (email == data_use[i].email && pass == data_use[i].pass) {
             check = true 
            }
          }
          if (check) {
            res.render('home3', { layout: 'main', data: data_use, showHeader: true})
         
        } else {
            res.render('signIn', { layout: 'main', wrong: true})
        }
    })
    }
    edit(req , res , next){
        taikhoanmodel.findById({_id:req.params.id})
        .then(taikhoans=>{
        taikhoans = taikhoans?taikhoans.toObject():taikhoans

         res.render('edituser' , {layout:'editmain' , taikhoans } )
     
        }).catch(err=>next(err))
     }

     update(req , res , next){
 
        taikhoanmodel.updateOne({_id:req.params.id} , req.body)
        .then(()=>res.redirect('/trangchu'))
        .catch(err=>{
        })
       }
    delete(req , res , next){
        taikhoanmodel.deleteOne({_id:req.params.id})
        .then(()=>{res.redirect('back')})
        .catch(err=>next(err))
     }
}
module.exports = new taikhoancontroller