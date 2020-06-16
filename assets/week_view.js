{
    let menuBtn = document.getElementById('menu-btn');
    let menuBtnisClick = false
    menuBtn.addEventListener('click',function(){
        if(!menuBtnisClick){
            let navItem = document.getElementById('nav-item');
        navItem.style.display = 'flex';
        navItem.style.left = '0' + '%';
        menuBtnisClick = true;
        }else{
            let navItem = document.getElementById('nav-item');
            navItem.style.display = 'none';
            menuBtnisClick = false;
        }

    })
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click',function(){
       showForm();
    })

    function showForm(){
        let form = document.getElementById('create-habbit-form');
        form.style.display = 'block';
    }
    function hideForm(){
        let form = document.getElementById('create-habbit-form');
        form.style.display = 'none';
    }
    hideForm();
}

// let updateHabbit = function(){
//     let newUpdate = document.getElementById('update-link');
//     newUpdate.addEventListener('click',function(e){
//        e.preventDefault();
//        $.ajax({
//         type:'post',
//         url:'/update/habbit/',
//         data:newUpdate.serialize(),
//         success:function(data){
//           console.log(data);
//         },
//         error:function(error){
//             console.log(error.responseText);
//          }
//       });
//     })
// }