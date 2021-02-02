const sw ="Hello there!";
document.getElementById("h1n1").innerHTML += sw + "<br> General Kenobi!"
console.log(sw + "  General Kenobi!");

const answer = "BCCCDBBBBCDAAA";
console.log(answer);

const data = ["ZO667 AACBBCDBBDCBBA", "ZT531 CACBCADADADBCB", "ZT773 AACCCCABBBDAAA",
"ZX738 ABAXDBBDBDDACA","ZY987 BADCACBCAADADC","ZZ240 ABBCDADDCACDDD","ZT773 AACCCCABBBDAAA"];

//https://raw.githubusercontent.com/SpiritChrusher/FavoriteBeer/master/src/main/Allbeers.json
//data.forEach(element => document.getElementById('mainp').innerHTML += element.split(' ')[1] +  "<br>");

for (let index = 0; index < data.length; index++) {
    const element = data[index].split(' ');
    document.getElementById('mainp').innerHTML += element +  "<br>";
    
}

console.log("db: "+data.length);

document.getElementById('mainp').innerHTML += "<h3>1st excercise (book): " + data.length + "db</h3>";

let match;

document.getElementById('clickto').addEventListener('click', function() {

    const text = document.getElementById("user_input").value;
    
    for (let index = 0; index < data.length; index++) {
        const element = data[index].split(' ');
        if (element[0] == text)
        {
           document.getElementById('mainp').innerHTML += "<h3> 2nd excercise: "+ element[1]+ "</h3><br>";
            match = element[1];
           console.log(match);

        }       
    }

   
   
});

document.getElementById('button2').addEventListener('click', function(){
    document.getElementById('mainp').innerHTML += "<h3> 2nd excercise: </h3><p>"+ answer;
    for (let i = 0; i < answer.length; i++){
        if (answer[i] == match[i]) {
            document.getElementById('mainp').innerHTML +='+';
        } else {
            document.getElementById('mainp').innerHTML +='U';
        }
    }
    document.getElementById('mainp').innerHTML +="</p>" + match;
   });



document.getElementById('button3').addEventListener('click', function(){

    const exid = Number(document.getElementById("input2").value)-1;

    document.getElementById('mainp').innerHTML += "<h3> 5th excercise: </h3>";

    let correct = 0;

    data.forEach(function howmany(element){
        const element2 = element.split(' ');
        if (element2[1][exid] == answer[exid]) {
            correct++;
            console.log("increased "+ answer[exid]);
            console.log(element2[1]);
         }
    });
    
    document.getElementById('mainp').innerHTML += "correct answers: " + correct + " db";
   });


   document.getElementById('button4').addEventListener('click', function(){
    document.getElementById('mainp').innerHTML += "<h3> 6th excercise: </h3>";
    const pointtable = "33333444445556"

    var myObjs = []

    let points = 0;

    data.forEach(function howmany(element){
        const element2 = element.split(' ');
        for (let index = 0; index < element2[1].length; index++) {
           
            if (element2[1][index] == answer[index]) {
                points+= Number(pointtable[index]);
             }
            
        }
        console.log(element2[1] + " : " + points);
        var obj = {p:points,n: element2[0]};
        myObjs.push(obj);
            points = 0;
        
    });
    myObjs.sort(compareValues('p', 'desc'));

//a top 3 pontos elemek kellenek
    var a = 0;
      for (let index = 1; index < myObjs.length; index++) {
        const element = myObjs[index-1];
        const element2 = myObjs[index];
        if(a > 2)
        {
            break;
        }
        if (element.p != element2.p) {
            a++;
            console.log(element.p);
        }
        else{
            console.log(element.p);
        }
          
      };
      


   });


   function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  
