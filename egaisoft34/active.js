 function showhistory (){
           //document.getElementById("directors").style.display='none';
           document.getElementById("vision").style.display='none';
           document.getElementById("meet").style.display='none';
           document.getElementById("history").style.display='block';

         }
         function showvision (){
           //document.getElementById("directors").style.display='none';
             document.getElementById("history").style.display='none';
           document.getElementById("meet").style.display='none';
           document.getElementById("vision").style.display='block';
         }
        /* function showdirectors (){
           
         
             document.getElementById("history").style.display='none';
            document.getElementById("vision").style.display='none';
            document.getElementById("meet").style.display='none';
           document.getElementById("directors").style.display='block';
         } */

          function showmeet (){
           
         
             document.getElementById("history").style.display='none';
            document.getElementById("vision").style.display='none';
           //document.getElementById("directors").style.display='none';
           document.getElementById("meet").style.display='block';
         }

//-----------------------products-----------------------------//

		 function showemoy(){
           document.getElementById("epra").style.display='none';
           document.getElementById("echit").style.display='none';
           document.getElementById("emoy").style.display='block';
           
         }
         function showepra (){
           document.getElementById("emoy").style.display='none';
             document.getElementById("echit").style.display='none';
           document.getElementById("epra").style.display='block';
           
         }
		 
		 
         function showechit (){
           
         
             document.getElementById("emoy").style.display='none';
            document.getElementById("echit").style.display='block';
           document.getElementById("epra").style.display='none';
           
         }


          


var current = document.getElementById('nav');

  function highlite(element)
  {
     if (current != null)
     {
         current.className = "";
     }
     element.className = "highlite";
     current = element;
  }



 