        let calculate=document.querySelector(".image");
        let date=new Date();
        const check=()=>{
            let valid=true;
         if(document.getElementById("day").value.trim()=="" )
         {
            document.getElementById("error").innerHTML="THIS FIELD IS REQUIRED";
            document.getElementById("labels").style.color="red";
            document.getElementById("day").style.borderColor="red";
            valid=false;

         } else if(document.getElementById("day").value.trim()>31)
         {
            document.getElementById("error").innerHTML="Invalid Input";
            document.getElementById("labels").style.color="red";
            document.getElementById("day").style.borderColor="red";
            valid=false;
         }
         else{
            document.getElementById("labels").style.color="hsl(0, 1%, 53%)";
            document.getElementById("day").style.borderColor="hsl(0, 1%, 53%)";
            document.getElementById("error").innerHTML="&nbsp;";
            valid=true;
         }

         if(document.getElementById("month").value.trim()=="")
         {
            document.getElementById("error2").innerHTML="THIS FIELD IS REQUIRED";
            document.getElementById("labels-month").style.color="red";
            document.getElementById("month").style.borderColor="red";
            valid=false;
         }else if(document.getElementById("month").value.trim()>12)
         {
            document.getElementById("error2").innerHTML="Invalid Input";
            document.getElementById("labels-month").style.color="red";
            document.getElementById("month").style.borderColor="red";
            valid=false;
         }
         else{
            document.getElementById("error2").innerHTML="&nbsp;";
            document.getElementById("labels-month").style.color="hsl(0, 1%, 53%)";
            document.getElementById("month").style.borderColor="hsl(0, 1%, 53%)";
            valid=true;
         }

         if(document.getElementById("year").value.trim()=="")
         {
            document.getElementById("error3").innerHTML="THIS FIELD IS REQUIRED";
            document.getElementById("labels-year").style.color="red";
            document.getElementById("year").style.borderColor="red";
            valid=false;
         }
         else if(document.getElementById("year").value.trim()>date.getFullYear())
         {
            document.getElementById("error3").innerHTML="Year is in future";
            document.getElementById("labels-year").style.color="red";
            document.getElementById("year").style.borderColor="red";
             valid=false;
         }
         else{
            document.getElementById("error3").innerHTML="&nbsp;";
            document.getElementById("labels-year").style.color="hsl(0, 1%, 53%)";
            document.getElementById("year").style.borderColor="hsl(0, 1%, 53%)";
            valid=true;
         }
             return valid;
        };

        const print=()=>{
            let pday=date.getDate(),pmonth=date.getMonth(),pyear=date.getFullYear();
            let day=document.getElementById("day").value-pday;
            let month=document.getElementById("month").value-pmonth;
            let year=document.getElementById("year").value-pyear;
            if(day<0)
               {
                day/=-1;
               }
               if(month<0)
               {
                month/=-1;
               }
               if(year<0)
                year/=-1;
            document.getElementById("d-age").innerHTML=day;
            document.getElementById("m-age").innerHTML=month+1;
            document.getElementById("y-age").innerHTML=year;
        }

        calculate.addEventListener("click",()=>{
              check();
              if(check())
              print();
             
        });
   