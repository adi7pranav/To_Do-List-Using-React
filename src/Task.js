function Task(props)
{
    // return (<div>
    //     <div style={props.status?{backgroundColor:"#22dd22",color:"white"}:{backgroundColor:"#FFC14D"}}><p>{props.taskName}&nbsp;
    //           <button style={{color:"white",backgroundColor:"green",border:"0",borderRadius:"5px"}}
    //             onClick={()=>props.doneTask(props.id)}>✔</button>&nbsp;

    //           <button style={{color:"white",backgroundColor:"red",border:"0",borderRadius:"5px"}}
    //            onClick={()=>props.deleteTask(props.id)}>✖</button>&nbsp;
    //            </p></div>
    // </div>);
     return (<tr style={props.status?{backgroundColor:"#22dd22",color:"white"}:{backgroundColor:"#FFC14D"}}>
        <td >{props.taskName}&nbsp;
        </td> <td> <button style={{color:"white",backgroundColor:"green",border:"0",borderRadius:"5px"}}
                onClick={()=>props.doneTask(props.id)}>✔</button>&nbsp;</td>  

             <td><button style={{color:"white",backgroundColor:"red",border:"0",borderRadius:"5px"}}
               onClick={()=>props.deleteTask(props.id)}>✖</button>&nbsp;</td> 
               
    </tr>);
}
export default Task;