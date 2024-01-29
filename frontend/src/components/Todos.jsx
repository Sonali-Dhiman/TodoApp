/* 
 todos={[
    title: "gotot gym",
    description:""
 ]}
*/

export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
          return <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={()=>{
                console.log(todo._id)
                fetch("http://localhost:3000/completed",{
                    method:"PUT",
                    body: JSON.stringify({
                        id:todo._id
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                .then(async (res)=>{
                    const json = await res.json();
                    alert(json.msg);
                    window.location.reload();
                })
              }}>{todo.completed == true? "Completed" : "Mark as Complete"}</button>
            </div>
        })
      }
    </div>
  );
};
