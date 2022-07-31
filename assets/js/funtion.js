/**
 * Alert Funtion
 */

const alertFuntion = (ms, alertType = 'danger')=>{
    return `<p class="alert alert-${alertType} d-flex justify-content-between">${ms} <button data-bs-dismiss="alert" class="btn-close"></button> </p>`
}

/**
 * Set Ls data
 */
const setLsData = (key, val) =>{

    // Check exist Data 
    let existData = [];
    if(localStorage.getItem(key)){
        existData = JSON.parse(localStorage.getItem(key));
    }

    // Set Data 
    existData.push(val);
    localStorage.setItem(key, JSON.stringify(existData))

}

/**
 *  Get Ls Data
 */

const getLsData =(key)=>{

    // Check Data 
    if(localStorage.getItem(key)){

        return JSON.parse(localStorage.getItem(key));

    }else{

        return false;

    }
    
}

/**
 * UpDate Ls Data
 */
const upDateLsData = (key, val)=>{
    localStorage.setItem(key, JSON.stringify(val))
}