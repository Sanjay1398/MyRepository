
//Budget controller 
var budgetController = (function (){
 
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.vale = value;
    };
    var InCome = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.vale = value;
    };     
     var data = {
         allItems:
         {
             exp: [],
             inc: []
         },
         
         totals:{
            exp: 0,
            inc: 0
         }
     };
       return {
           addItem : function(type, des, val)
           {
               var newItem, ID;
               //craete new ID
               if (data.allItems[type].length > 0){
               ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
               }
               else{
                   ID = 0;
               }
               // careate new item based on inc or exp 
               if(type === 'exp'){
                   newItem = new Expense(ID, des, val);
               }else if(type === 'inc')
               {
                   newItem = new InCome(ID, des, val);
               }
               //push it into our data structure
               data.allItems[type].push(newItem);
               //return the new element
               return newItem;
               
           },
           testing: function()
           {
               console.log(data);
           }
       }

})();


//UControlller

var UIController = (function(){
    var DOMStrings = {
        inputType: '.add__type',
        inputDecs: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }; 

   return{
       getInput: function()
       {  
           return{
          type: document.querySelector(DOMStrings.inputType).value, //wil be inc or exp
          description: document.querySelector(DOMStrings.inputDecs).value,
          value: document.querySelector(DOMStrings.inputValue).value,
         };

       },
       getDOMStrings : function()
       {
           return DOMStrings;
       }
   }
  
})();

//Global App Controller 

var controller = (function(budgetctrl, UICtrl)
{   
    var DOM = UICtrl.getDOMStrings();
    var setupEventListeners  = function(){
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
   
    var ctrlAddItem = function()
    {   var input, newItem;
        // 1. Get the Field input data
         input = UICtrl.getInput();
        // 2. Add the item to the bugdte controller 
          newItem = budgetctrl.addItem(input.type, input.description, input.value);

        // 3. Add the new iyem to the uer interface
    
        // 4. acalcuate the budget 

        // 5. And Display the budget
        
    };

    return {
        init: function(){
            console.log('application has started');
            setupEventListeners();
        }
    };
})(budgetController, UIController);

controller.init();

 
    
    