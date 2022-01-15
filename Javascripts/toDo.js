
new Vue ({
   el :"#app",

   data : {

      inEdit : false,
      selectedIndex : null,
      todo : '',
      todos: []
   },

   methods : {

      storeItem() {

         if(this.todo == '' || this.todo == null){
            alert("You have not entered any value ! ");
         } 
         else {
            this.todos.push(this.todo);
            this.todo = ''
         }     

   
      },

      editItem(index, todo) {
         this.todo = todo
         this.selectedIndex = index
         this.inEdit = true
      },

      update(){
         this.todos.splice(this.selectedIndex, 1, this.todo)
         this.inEdit = false
         this.todo = ''
      },

      deleteItem(index){
         this.todos.splice(index, 1)
      }

   }
})