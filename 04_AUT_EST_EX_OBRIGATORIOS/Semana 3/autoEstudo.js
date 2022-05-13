
var calcResDiv = "Calcula"
var g = 10

function calculaTempo(v0, g){
    var operator = "/";
    var v0 = document.getElementById("v0").value;
    var t = calculoT(v0, operator, g);
    mostraOperacao_Tenp(v0, operator, g);
    mostraResultado(t);

}

function calculaHmax(v0, g){
    var operator = "/";
    var v0 = document.getElementById("v0").value;
    var h = calculoH(v0, operator, g);
    console.log(v0)
    mostraOperacao_Hmax(v0, operator, g);
    mostraResultado(h);
}


function calculoT(v0, operator, g){
    if(operator == "/"){
        t = v0/g;
       
    }
    
    return t;
};                                      
function calculoH(v0, operator, g){
    if(operator == "/" ){
        h = (v0*v0)/(2*g);
    }
    return h;
}

function mostraOperacao_Tenp(v0, operator, g){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${v0} ${operator} ${g} = `;
}
function mostraOperacao_Hmax(v0, operator, g){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${v0*v0} ${operator} ${2*g} = `;
}



function mostraResultado(res){
    document.getElementById(calcResDiv).innerHTML += res;
}