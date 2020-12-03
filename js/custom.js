//  new Vue({ 
//     el : '#app',
//      data () {
//        return {
//          signal:false,
//          items:['item1' ,'item2', 'item3','item4','item5']
//        }
//       },
//    methods:{
//      toggle:function(){
//        this.signal=!this.show

//      }
//          }
//  }); 
 
new Vue({
  // the data property
  el: '#tv',
  
  data() {
    return {
      signal: false,
  
      // imageSource:"../imgs/offTV.jpg",
    };
  },

  // the methods property
  methods: {
    toggle: function () {
      this.signal = !this.signal;
    },
  },
});
 
// new Vue({
//   el:'doc',
//   data(){
//     hello:'<h1>Nickson<h1> '
//   }
// })

new  Vue({
el:'#root',
data(){
  return{
    title:'Catalyst 006 Students:',
    students:[],
studentToBeAdded:undefined,
    
  }
},

methods:{
  addStudent:function(){
    this.students.push(this.studentToBeAdded);
  }
}
})


