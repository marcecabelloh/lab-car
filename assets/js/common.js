/*función para validar los campos del formulario. NO corre!!!! sacado del código creado del trabajo en grupo  
buscaba replicarlo y poder hacerlo correr.

function validacion(){
  //se llaman ids de inputs
  var nomb = document.getElementById("usr").value;
  var tele = document.getElementById("tel").value;
  var corr = document.getElementById("email").value;
  var comen = document.getElementById("comment").value;

  //function valida nombre
  function nombre(){
    if(nomb === ""){
      var contenedor = document.getElementsByClassName("input-box")[0];
      var span = document.createElement("span");
      var texto = document.createTextNode("Campo obligatorio");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }else if(!/^([a-zA-Z])*$/.test(nomb)){
      var contenedor = document.getElementsByClassName("input-box")[0];
      var span = document.createElement("span");
      var texto = document.createTextNode("Solo pueden ser letras");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }
  }
  nombre();
  //valida celular
  function celular(){
    if(tele === ""){
      var contenedor = document.getElementsByClassName("input-box")[1];
      var span = document.createElement("span");
      var texto = document.createTextNode("Campo obligatorio");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }else if(!/^([0-9])*$/.test(tele)){
      var contenedor = document.getElementsByClassName("input-box")[1];
      var span = document.createElement("span");
      var texto = document.createTextNode("Deben ser solo números");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }
  }
  celular();
  //valida correo
  function correo(){ 
    if(corr === ""){
      var contenedor = document.getElementsByClassName("input-box")[2];
      var span = document.createElement("span");
      var texto = document.createTextNode("Campo obligatorio");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(corr))){
      var contenedor = document.getElementsByClassName("input-box")[2];
      var span = document.createElement("span");
      var texto = document.createTextNode("Debe ser un correo válido");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }
  }
  correo();
  
  //valida comentario
  function comentario(){
    if(comen === ""){
      var contenedor = document.getElementsByClassName("input-box")[4];
      var span = document.createElement("span");
      var texto = document.createTextNode("Campo obligatorio");
      span.appendChild(texto);
      contenedor.appendChild(span);
      return false;
    }
  }
  comentario();   
}
