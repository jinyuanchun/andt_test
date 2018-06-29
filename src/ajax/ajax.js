import $ from 'jquery';

function ajax_MainProject (dat,adrB) {
    //console.log(dat);
    //var dat = {usr:"徐晓静"};
   $.ajax(
        {
            url:adrB,
            //data:JSON.stringify(dat),
            data:dat,
            type:"get",
            dataType:"jsonp",
            jsonpCallback:'new_callback',
            async:true,
            //scriptCharset:'utf-8',
            //context:'text/json',
            
            success:function (res){
                alert('test');
                alert(res);
                //return JSON.stringify(result);
                //document.write(result);

                console.log(res);

            },
            error:function(){
                alert('failed');
            }
            
        }
    )
}

export default ajax_MainProject;