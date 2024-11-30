function toDOList() {


    var x = document.querySelector('#dataType').value;
    var y = document.createElement("li");
    var s = document.createElement("button");
    var e = document.createTextNode('button');
    y.id='li';
    s.append(e);
    s.style.color="red";
   s.id="delete";
   s.setAttribute('type','submit');
    if (x == "") {
        return false;

    }
    else {


  

        y.append(x);
        var z = document.querySelector("#list");
      
        z.append(y,s);
     
        x = document.querySelector('#dataType').value = "";
 
        s.addEventListener('click',function(){
            y.style.display="none"
             s.style.display="none"
        
        });

     
        return false;
    }
    
}
