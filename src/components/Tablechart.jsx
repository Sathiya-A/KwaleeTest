export default function Tablechart(props){
    const {data} =props;
    console.log("data",data);
    return(

        <div style={{height:'415px',overflow:'auto'}}>
            <h1>Table</h1>
            <table className="table center overflow-scroll" style={{height: "400px"}}>
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Country</th>
      <th scope="col">App</th>
      <th scope="col">Platform</th>
      <th scope="col">Ad Network</th>
      <th scope="col">Daily Users</th>
    </tr>
  </thead>
  <tbody>
    {data.map((d,index)=>{
        return(
            <tr key={index}>
            <td>{d.Date}</td>
            <td>{d.Country}</td>
            <td>{d.App}</td>
            <td>{d.Platform}</td>
            <td>{d["Ad Network"]}</td>
            <td>{d["Daily Users"]}</td>
          </tr>
        )
    })}
 
   
  </tbody>
</table>
        </div>
    )
}