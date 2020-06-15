const express = require('express');
const port = 8000;
//setup mongoose and create schema for the input value and including those file here
const db = require('./config/mongoose');
const Habbit = require('./model/habbit');



const app = express();
//set view engine for rendering the home page
app.set('view engine','ejs');
app.set('views','./views');


app.use(express.urlencoded());
// setup for static files
app.use(express.static('assets'));

app.get('/',function(req,res){
    Habbit.find({},function(err,habbits){
        return res.render('home',{
            habbits:habbits
        });
    })
    
});

let index = 0;

app.post('/create/habbit',function(req,res){
    Habbit.create({
       Habbit:req.body.habbitName,
       Schedule:req.body.schedule,
       Detail:{
           Date:new Date(),
           Status:req.body.status
       }
    },function(err,habbit){
        if(err)
        {
            console.log('habbit is not created',err);
            return res.redirect('back');
        }else{
            let D = new Date();
            let currentDay = D.getDate()-1;
            let inputDate = new Date(req.body.date);
            date = inputDate.getDate();
            
            let id = setInterval(async function(){
                     inputDate = new Date();
                     inputDate.setDate(currentDay);
                     await habbit.Detail.push({
                        Date:inputDate,
                        Status:req.body.status
                     });
                    await habbit.save();
                    if(date==currentDay){
                        clearInterval(id);
                    }
                    console.log(date);
                    currentDay--;
            },1000);
            // for(let i=date+1;i<=currentDay;i++){
            //     async function setAdate(){
            //         inputDate = new Date();
            //         await inputDate.setDate(i);
            //         await habbit.Detail.push({
            //             Date:inputDate,
            //             Status:req.body.status
            //         })
            //         await habbit.save();
            //      }
            //      setAdate();
            // }
            
            console.log(typeof(req.body.date));
            console.log('habbit is created now',habbit);
            return res.redirect('back'); 
        }
    })
    
})
app.get('/week/view/',function(req,res){
    Habbit.find({},function(err,habbits){
            return res.render('week_view',{
               habbits:habbits 
            })
        
    })
})
app.get('/update/habbit/',function(req,res){
        let status = true;
        if(req.query.status=='true')
          {
            status = false;
          }
         
          console.log(req.query.id);
           Habbit.findById(req.query.id,function(error,habbit){
            if(error){
                console.log('error in update status');
                return res.redirect('back');
            }
            else{
                  for(i of habbit.Detail){
                     if(i._id==req.query.dateId){
                         console.log(i.Status);
                         console.log(status);
                        i.Status = status;
                        habbit.save();
                        break;
                     } 
                  }
                  return res.redirect('back');
                }
            
                console.log('update is not done');
                return res.redirect('back');
            
        });
});





app.listen(port,function(error){
    if(error){
        console.log(`error in server running:${error}`);
        return;
    }else{
         console.log(`server is running on port:${port}`);
    }
});