// Get Elements 
let post_add_form = document.getElementById('post_add_form');
let alertBox = document.getElementById('alertBox');
let post_list = document.getElementById('post_list');
let post_edit_form = document.getElementById('post_edit_form');


// From Submit 
post_add_form.onsubmit = (e)=>{
    e.preventDefault();

    // Get Form Value 
    let frm_val = new FormData(e.target);
    let data = Object.fromEntries(frm_val.entries());
    let {uname, uimage, pcontent, pimage} = Object.fromEntries(frm_val.entries());

    // Check Validation 
    if(!uname || !uimage || !pcontent || !pimage){

        alertBox.innerHTML = alertFuntion('All Fileds Are Required');

    }else{

        setLsData('li_post', data);
        alertBox.innerHTML = alertFuntion('Post Create Success', 'success');
        e.target.reset();
        showData();

    }


}

// Show Main File data 
const showData = ()=>{

    let receiveData = getLsData('li_post');
    
    let post_li = '';
    // Show Data 
    if(!receiveData || receiveData == 0){
        post_li = `
        
            <div class="card mx-4 my-4">
                <div class="card-body text-center">
                    <h5>No Post Found</h5>
                </div>
            </div>
        
        `
    }

    if(receiveData){

        receiveData.map((item, index)=>{
            post_li += `
            
            <div class="card mx-4 my-4">
            <div class="card-body">
                <div class="user-post-top">
                    <div class="user-post-left-left">
                        <div class="author-img">
                            <a href=""><img src="${item.uimage}"></a>
                        </div>
                        <div class="author-text">
                            <h6>${item.uname}</h6>
                            <p>musician</p>
                            <span>10 h <i class="fa-solid fa-earth-asia"></i></span>
                        </div>
                    </div>
                    <div class="user-post-top-right">
                        <div class="dropdown">
                            <a class="btn dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                            </a>
                          
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item edit_post" data-bs-toggle="modal" href="#post_edit_modal" post_index="${index}">Edit</a></li>
                              <li><a class="dropdown-item delete_post" post_index="${index}" href="#">Delete</a></li>
                            </ul>
                          </div>
                    </div>
                </div>
                <p>${item.pcontent}</p>
            </div>
            <img class="w-100" src="${item.pimage}">
        </div> 
            
            `
        })

    }


    post_list.innerHTML = post_li;

}
showData();


// Post Edit 
post_list.onclick =(e)=>{
    
    if(e.target.classList.contains('edit_post')){

        let index = e.target.getAttribute('post_index')
        let data = getLsData('li_post');
        let {uname, uimage, pcontent, pimage} = data[index];

        post_edit_form.innerHTML = `
            
            <div class="my-1">
            <label for="">User Name</label>
            <input type="text" value="${uname}" name="uname" class="form-control">
        </div>
        <div class="my-1">
            <label for="">User Image</label>
            <input type="text" value="${uimage}" name="uimage" class="form-control">
        </div>
        <div class="my-1">
            <input type="hidden" value="${index}" name="index" class="form-control">
        </div>
        <div class="my-1">
            <label for="">Post content</label>
        <textarea name="pcontent" id="" class="form-control">${pcontent}</textarea>
        </div>
        <div class="my-1">
            <label for="">Post Image</label>
            <input type="text" value="${pimage}" name="pimage" class="form-control">
        </div>
        <div class="my-3">
            <button class="btn btn-primary w-100">Create Post</button>
        </div>

        `;

    }



    // Delete Data 
    if(e.target.classList.contains('delete_post')){

        // Per Mission 
        let user_per = confirm('Are You Sure');
        if(user_per){
            let index = e.target.getAttribute('post_index');
            let data = getLsData('li_post');
            // data[index] = {uname, uimage, pcontent, pimage};
            data.splice(index, 1);
            upDateLsData('li_post', data)
            showData()

        }else{
            alert('Post Safe')
        }

        


    }




    
}


// Update Post 
post_edit_form.onsubmit = (e)=>{
    e.preventDefault();

    // Get form Val 
    let val_frm = new FormData(e.target);
    let data = Object.fromEntries(val_frm.entries());
    let {uname, uimage, pcontent, pimage, index} = Object.fromEntries(val_frm.entries());
    let edit_data = getLsData('li_post');
    edit_data[index] = {uname, uimage, pcontent, pimage};

    // Update Data 
    upDateLsData('li_post', edit_data)
    showData()



}


