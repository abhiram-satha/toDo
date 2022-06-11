export default function AddToDo ({createNewToDo}) {
  return(
    <>
    <form onSubmit={(event)=>{createNewToDo(event)}}>
      <input type="text" placeholder="Add New To Do"></input>
    </form>
    </>
  )
}