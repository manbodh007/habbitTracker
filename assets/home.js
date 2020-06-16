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