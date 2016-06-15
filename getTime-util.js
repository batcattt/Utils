 function getTime(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var time = year+'/'+month+'/'+
                day+' '+hours+':'+minutes+':'+seconds;
            return time;
        }

// function FreshTime()
// {
//         var endtime=new Date("2016/7/15,12:20:12");//结束时间
//         var nowtime = new Date();//当前时间
//         var lefttime=parseInt((endtime.getTime() - nowtime.getTime())/1000); 
//         d=parseInt(lefttime/(60*60*24));
//         h=parseInt(lefttime/(60*60)%24);
//         m=parseInt(lefttime/60%60);
//         s=parseInt(lefttime%60);
       
//         document.getElementById("LeftTime").innerHTML="还剩"+d+"天"+h+"小时"+m+"分"+s+"秒";
//         if(lefttime<=0){
//         document.getElementById("LeftTime").innerHTML="团购已结束";
//         clearInterval(sh);
//         }
// }
  
//    var sh;
//    sh=setInterval(FreshTime,1000);