var json =[
    {
        "id" : "Mohamed",
        "msg" : "Hi, I'm Mohamed",
        "company" :"GUVI"
    },
    {
        "id" : "Nathim",
        "msg":"Hi, I'm Nathim",
        "company": "VGTPS"
    }
];
// for
for(var i=0 ;i< json.length;i++){
    var obj = json[i];
    
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.company);
}
// for Each
json.forEach(function(obj) { 
    console.log(obj.msg); });

// for in
for(var key in json){
    if(json.hasOwnProperty(key)) {
        console.log(json[key].msg)
    }
}

// for of
let text = ""
for(let x of json[key].id){
  text = text + x;
}
 console.log(text);
