// import React from 'react';

// import COrderedList from 'carbon-components-react/lib/components/OrderedList';
// import CListItem from 'carbon-components-react/lib/components/ListItem';
// import { ThumbsUp16 , TrashCan16} from '@carbon/icons-react';

// import '../node_modules/carbon-components/css/carbon-components.css';
// import './App.css';

// class VIEW_LIST_COMP extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//         list_todos: []
//     }
//   }

//   componentDidMount() {
//     let url = 'http://localhost:81/todoapp/api/todos/';
//     fetch(url , {
//       method: 'GET',
//       headers: {
//         'x-gateway-apikey': 'ConfiguredValue',
//         'csrf-token': 'CrossSiteRequestForgery_Token'
//       }
//     })
//     .then(response => response.json())
//     .then((data)=>{
//       this.setState({list_todos: data.todos})
//     })
//   }
  
//    render() {
//       return (
//         <div class="row App" >
//         <COrderedList>
//           {
//           this.state.list_todos.map(
//             (todo, index) =>  
//             <CListItem  > 
//               <div style={{ textDecoration: todo.status=='Completed' ? "line-through" : "" }} class="column">{todo.description}</div>
//               <div class="column">
//                 <ThumbsUp16 onClick={() => this.completeTODO(todo.id)} /> &emsp; 
//                 <TrashCan16 onClick={() => this.deleteTODO(todo.id)}/> 
//               </div>
//               <br/>
//             </CListItem>
//             )
//           }
//         </COrderedList> 
//         </div>
//       );
//    }
// }
// export default VIEW_LIST_COMP;