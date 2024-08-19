// Factory Function

// function square(){
//     return area={
//         side:5,
//         perimeter:20,

//         draw: function(){
//             console.log("Hello");
//         }
//     };
// }

// var s1=square();


// constructore Function

function Rectangle(len,bre){
        this.length=len;
        this.breath=bre;

        this.draw=function(){
            console.log(this.breath*this.length);
        }
}

var R1=new Rectangle(4,5);
var R2=new Rectangle(4,6);

R1.color="Yellow";
R2.color="Red"

delete R1.color;