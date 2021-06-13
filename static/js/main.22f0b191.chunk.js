(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(87)},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(24),l=a.n(r),c=a(12),o=a(13),s=a(16),m=a(14),p=a(17),u=a(117),d=a(118),h=a(119),f=a(107),g=(a(56),function(){return i.a.createElement("nav",{className:"nav-wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement(f.a,{to:"/",className:"brand-logo"},"Foodies HUB"),i.a.createElement("ul",{className:"right"},i.a.createElement("li",null,i.a.createElement(f.a,{to:"/react-shopping-cart"},"Shop ",i.a.createElement("i",{class:"fa fa-shopping-bag","aria-hidden":"true"})," ")),i.a.createElement("li",null,i.a.createElement(f.a,{to:"/compare"},"Compare",i.a.createElement("i",{class:"fa fa-exchange","aria-hidden":"true"})," ")),i.a.createElement("li",null,i.a.createElement(f.a,{to:"/cart"},"My cart",i.a.createElement("i",{class:"fa fa-shopping-cart","aria-hidden":"true"})," ")))))}),b=a(15),E=(a(63),a(35)),v=a.n(E),y=a(116),w=a(108),k=a(111),N=a(115),O=a(114),j=a(110),C=a(112),I=a(113),T=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){e.props.addToCart(t)},e.handleView=function(t){e.setState({view:t})},e.handleCompareClick=function(t){e.state.compareProducts.length<3&&e.props.addToCompareProduct(t)},e.state={apiData:[],view:"card",columns:[{id:"title",label:"Product Name",minWidth:100,align:"right"},{id:"type",label:"Type",minWidth:100,align:"right"},{id:"filename",label:"Image",minWidth:100,align:"right"},{id:"price",label:"Price",minWidth:100,align:"right"},{id:"volume",label:"Quantity",minWidth:100,align:"right"},{id:"rating",label:"Rating",minWidth:100,align:"right",format:function(e){return e.toFixed(2)}},{id:"addToCart",label:"Add To Cart / Compare Products",minWidth:100}],compareProducts:[]},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getItem(),this.setState({compareProducts:this.props.compareItems})}},{key:"getItem",value:function(){this.setState({apiData:this.props.items})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.apiData,t.view),n=t.columns,r=(t.hovered,this.state.apiData.map(function(t,a){return i.a.createElement("div",{className:"card",key:a},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"image",src:t.filename,alt:t.title,height:"300px"}),i.a.createElement("span",{className:"card-title"},t.title),i.a.createElement("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light red",onClick:function(){e.handleClick(t.title)}},i.a.createElement("i",{className:"material-icons"},"add")),i.a.createElement("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light red compare",onClick:function(){e.handleCompareClick(t.title)}},i.a.createElement("i",{class:"fa fa-exchange","aria-hidden":"true"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("p",null,t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",t.price,"$")),i.a.createElement("p",null,i.a.createElement("b",null,"Type: ",t.type)),i.a.createElement("p",null,i.a.createElement("b",null,"Quantity: ",t.volume)),t.volume<3?i.a.createElement("p",{className:"warning"}," Hurry! Only few Item left!!"):null,i.a.createElement("p",null,i.a.createElement(v.a,{rating:t.rating,starRatedColor:"#00B2EE",numberOfStars:5,starDimension:"20px",starSpacing:"5px",name:"rating"}))))}));return i.a.createElement("div",{className:"container"},i.a.createElement("div",{class:"header"},i.a.createElement("h3",{className:"center"},"Our items"),i.a.createElement("div",{className:"toggle-div"},i.a.createElement("i",{onClick:function(){e.handleView("grid")},class:"fa fa-table fa-3x ".concat("card"===a?"table":"table-active"),"aria-hidden":"true"}),i.a.createElement("i",{onClick:function(){e.handleView("card")},class:"fa fa-th-large fa-3x ".concat("grid"===a?"table":"table-active"),"aria-hidden":"true"}))),"card"===a?i.a.createElement("div",{className:"box"},r," "):i.a.createElement(w.a,null,i.a.createElement(j.a,null,i.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},i.a.createElement(C.a,null,i.a.createElement(I.a,null,n.map(function(e){return i.a.createElement(O.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)}))),i.a.createElement(N.a,null,this.state.apiData.map(function(t){return i.a.createElement(I.a,{hover:!0,role:"checkbox",tabIndex:1,key:t.code},n.map(function(a){var n=t[a.id];return i.a.createElement(O.a,{key:a.id,align:a.align},"rating"===a.id?i.a.createElement(v.a,{rating:t.rating,starRatedColor:"#00B2EE",numberOfStars:5,starDimension:"20px",starSpacing:"5px",name:"rating"}):"addToCart"===a.id?i.a.createElement("div",null,i.a.createElement(y.a,{variant:"contained",className:"add-btn",onClick:function(){e.handleClick(t.title)}},i.a.createElement("i",{className:"material-icons"},"add")),"  ",i.a.createElement(y.a,{variant:"contained",className:"add-btn",onClick:function(){e.handleCompareClick(t.title)}},i.a.createElement("i",{class:"fa fa-exchange","aria-hidden":"true"}))," "):"filename"===a.id?i.a.createElement("img",{src:t.filename,alt:t.title,width:"150px",height:"100px"}):n)}))}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){e.compareItems.length<4&&(t.compareProducts=e.compareItems)}}]),t}(n.Component),P=Object(b.b)(function(e){return{items:e.items,compareItems:e.compareItems}},function(e){return{addToCart:function(t){e({type:"ADD_TO_CART",title:t})},addToCompareProduct:function(t){e({type:"ADD_COMPARE_PRODUCT",title:t})}}})(T),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleChecked=function(e){e.target.checked?a.props.addShipping():a.props.substractShipping()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"collection"},i.a.createElement("li",{className:"collection-item"}),i.a.createElement("li",{className:"collection-item"},i.a.createElement("b",null,"Total: ",this.props.total," $"))),i.a.createElement("div",{className:"checkout"},i.a.createElement("button",{disabled:0===this.props.total,className:"waves-effect waves-light btn"},"Checkout")))}}]),t}(n.Component),R=Object(b.b)(function(e){return{addedItems:e.addedItems,total:e.total}},function(e){return{addShipping:function(){e({type:"ADD_SHIPPING"})},substractShipping:function(){e({type:"SUB_SHIPPING"})}}})(D),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleRemove=function(e){a.props.removeItem(e)},a.handleAddQuantity=function(e){a.props.addQuantity(e)},a.handleSubtractQuantity=function(e){a.props.subtractQuantity(e)},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map(function(t){return i.a.createElement("li",{className:"collection-item avatar",key:t.id},i.a.createElement("div",{className:"item-img"},i.a.createElement("img",{src:t.filename,alt:t.filename,className:""})),i.a.createElement("div",{className:"item-desc"},i.a.createElement("span",{className:"title"},t.title),i.a.createElement("p",null,t.description),i.a.createElement("p",null,i.a.createElement("b",null,"Price: ",t.price,"$")),i.a.createElement("p",null,i.a.createElement("b",null,"Quantity: ",t.quantity)),i.a.createElement("div",{className:"add-remove"},i.a.createElement(f.a,{to:"/cart"},i.a.createElement("i",{className:"material-icons",onClick:function(){e.handleAddQuantity(t.title)}},"arrow_drop_up")),i.a.createElement(f.a,{to:"/cart"},i.a.createElement("i",{className:"material-icons",onClick:function(){e.handleSubtractQuantity(t.title)}},"arrow_drop_down"))),i.a.createElement("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){e.handleRemove(t.title)}},"Remove")))}):i.a.createElement("p",null,"Nothing.");return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"cart"},i.a.createElement("h5",null,"You have ordered:"),i.a.createElement("ul",{className:"collection"},t)),i.a.createElement(R,null))}}]),t}(n.Component),_=Object(b.b)(function(e){return{items:e.addedItems}},function(e){return{removeItem:function(t){e({type:"REMOVE_ITEM",title:t})},addQuantity:function(t){e({type:"ADD_QUANTITY",title:t})},subtractQuantity:function(t){e({type:"SUB_QUANTITY",title:t})}}})(A),S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.props.removeCompareProduct(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"row compare"},i.a.createElement("div",{className:"col-12 mt-5 text-center"},i.a.createElement("table",{className:"table"},i.a.createElement("thead",{className:"thead-default"},i.a.createElement("tr",null,i.a.createElement("th",null),this.props.compareItems.map(function(e){return i.a.createElement("th",{key:e.title},e.title)}))),i.a.createElement("tbody",null,i.a.createElement("tr",{className:"price"},i.a.createElement("th",{scope:"row"},"Price"),this.props.compareItems.map(function(e){return i.a.createElement("td",{key:e.title,className:"text-center"},e.price)})),i.a.createElement("tr",{className:"colors"},i.a.createElement("th",{scope:"row"},"Type"),this.props.compareItems.map(function(e){return i.a.createElement("td",{key:e.title},e.type)})),i.a.createElement("tr",{className:"condition"},i.a.createElement("th",{scope:"row"},"Rating"),this.props.compareItems.map(function(e){return i.a.createElement("td",{key:e.title,className:"text-center"},e.rating,"/5")})),i.a.createElement("tr",{className:"colors"},i.a.createElement("th",{scope:"row"},"Remove"),this.props.compareItems.map(function(t){return i.a.createElement("td",{key:t.title,className:"text-center"},i.a.createElement(y.a,{variant:"contained",className:"remove-btn",onClick:function(){e.handleClick(t.title)}},i.a.createElement("i",{class:"fa fa-minus-circle","aria-hidden":"true"})))}))))))}}]),t}(n.Component),x=Object(b.b)(function(e){return{compareItems:e.compareItems}},function(e){return{removeCompareProduct:function(t){e({type:"REMOVE_COMPARE_PRODUCT",title:t})}}})(S),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(g,null),i.a.createElement(d.a,null,i.a.createElement(h.a,{exact:!0,path:"/react-shopping-cart",component:P}),i.a.createElement(h.a,{path:"/cart",component:_}),i.a.createElement(h.a,{path:"/compare",component:x}))))}}]),t}(n.Component),Q=(a(85),a(36)),M=a(19),U={items:[{title:"Brown eggs",type:"dairy",description:"Raw organic brown eggs in a basket",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/0.jpg",height:600,width:400,price:28,rating:4,volume:1},{title:"Sweet fresh stawberry",type:"fruit",description:"Sweet fresh stawberry on the wooden table",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/1.jpg",height:450,width:299,price:29,rating:4,volume:11},{title:"Asparagus",type:"vegetable",description:"Asparagus with ham on the wooden table",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/2.jpg",height:450,width:299,price:18,rating:3,volume:2},{title:"Green smoothie",type:"dairy",description:"Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach.",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/3.jpg",height:600,width:399,price:17,rating:4,volume:10},{title:"Raw legums",type:"vegetable",description:"Raw legums on the wooden table",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/4.jpg",height:450,width:299,price:17,volume:12},{title:"Baking cake",type:"dairy",description:"Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/5.jpg",height:450,width:675,price:114,rating:4,volume:7},{title:"Pesto with basil",type:"vegetable",description:"Italian traditional pesto with basil, chesse and oil",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/6.jpg",height:450,width:299,price:189,rating:2,volume:17},{title:"Hazelnut in black ceramic bowl",type:"vegetable",description:"Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/7.jpg",height:450,width:301,price:275,volume:1},{title:"Fresh stawberry",type:"fruit",description:"Sweet fresh stawberry on the wooden table",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/8.jpg",height:600,width:399,price:28,rating:4,volume:10},{title:"Lemon and salt",type:"fruit",description:"Rosemary, lemon and salt on the table",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/9.jpg",height:450,width:299,price:15,rating:5,volume:18},{title:"Homemade bread",type:"bakery",description:"Homemade bread",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/10.jpg",height:450,width:301,price:17,rating:3,volume:17},{title:"Legums",type:"vegetable",description:"Cooked legums on the wooden table",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/11.jpg",height:600,width:399,price:14,rating:0,volume:2},{title:"Fresh tomato",type:"vegetable",description:"Fresh tomato juice with basil",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/12.jpg",height:600,width:903,price:16,rating:2,volume:21},{title:"Healthy breakfast",type:"fruit",description:"Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/13.jpg",height:450,width:350,price:13,rating:2,volume:20},{title:"Green beans",type:"vegetable",description:"Raw organic green beans ready to eat",filename:"https://api4286.s3.ap-south-1.amazonaws.com/images/14.jpg",height:450,width:300,price:28.79,rating:1,volume:16}],addedItems:[],compareItems:[],total:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find(function(e){return e.title===t.title});if(e.addedItems.find(function(e){return t.title===e.title}))return a.quantity+=1,Object(M.a)({},e,{total:e.total+a.price});a.quantity=1;var n=e.total+a.price;return Object(M.a)({},e,{addedItems:[].concat(Object(Q.a)(e.addedItems),[a]),total:n})}if("REMOVE_ITEM"===t.type){var i=e.addedItems.find(function(e){return t.title===e.title}),r=e.addedItems.filter(function(e){return t.title!==e.title}),l=e.total-i.price*i.quantity;return Object(M.a)({},e,{addedItems:r,total:l})}if("ADD_QUANTITY"===t.type){var c=e.items.find(function(e){return e.title===t.title});c.quantity+=1;var o=e.total+c.price;return Object(M.a)({},e,{total:o})}if("SUB_QUANTITY"===t.type){var s=e.items.find(function(e){return e.title===t.title});if(1===s.quantity){var m=e.addedItems.filter(function(e){return e.title!==t.title}),p=e.total-s.price;return Object(M.a)({},e,{addedItems:m,total:p})}s.quantity-=1;var u=e.total-s.price;return Object(M.a)({},e,{total:u})}if("ADD_COMPARE_PRODUCT"===t.type){var d=e.items.find(function(e){return e.title===t.title});return e.compareItems.find(function(e){return t.title===e.title})?Object(M.a)({},e):Object(M.a)({},e,{compareItems:[].concat(Object(Q.a)(e.compareItems),[d])})}if("REMOVE_COMPARE_PRODUCT"===t.type){var h=e.compareItems.filter(function(e){return t.title!==e.title});return Object(M.a)({},e,{compareItems:h})}return e},B=a(28),W=Object(B.b)(H);l.a.render(i.a.createElement(b.a,{store:W},i.a.createElement(z,null)),document.getElementById("root"))}},[[51,2,1]]]);
//# sourceMappingURL=main.22f0b191.chunk.js.map