//Module 1

var uiController = (function () {

})();

//Module 2
var financeController = (function () {})();

//Module 3
var connector = (function (uiController, financeController) {

   function medeelel (){
    
  //1.Дэлгэцээс утагууд авах  
  console.log("Дэлгэцнээс мэдээлэл авлаа");
  //2.Утагуудыг finance controllert дамжуулах
  //3.Авсан өгөгдлүүдээ тохирох хэсэгт харуулах
  //4.Төсвийг тооцоолно
  //5.Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана

   }

  document.querySelector(".add__btn").addEventListener('click', function (){medeelel();})

  document.addEventListener("keypress", function(event){

    
    if(event.keyCode === 13|| event.which ===13 ) {medeelel();}
      else console.log('oor tovch daragdlaa');
    
    })

 
})(uiController, financeController);
