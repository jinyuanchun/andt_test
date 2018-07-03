import axios from 'axios';

/*
function apiAxios (url,callback) { 
    axios.get(url).then(
        (res) => {
            callback(res)
        }
    ).catch(
        (err)=>{
            console.log("err:",err);
        }
    )
}
*/

function get (url,callback) {
    //apiAxios(url,callback);
    axios.get(url).then(
        (res) => {
            callback(res)
        }
    ).catch(
        (err)=>{
            console.log("err : ",err);
        }
    )
    /*
    axios.get('/php/mysql.php').then((res) => {
        console.log("res:",res);
    }).catch((err) => {
        console.error("err:"err);
    })
    */
}

export default get;