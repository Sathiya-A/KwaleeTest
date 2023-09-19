import { useState, useEffect } from "react";
import csvfile from "../file/data_sample.csv";
import * as d3 from "d3";
import BarChart from "./Barchart.jsx";
import Tablechart from './Tablechart.jsx';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Chart() {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true);
   const [fromdate, setfromdate] = useState();
   const [Todate, setTodate] = useState();
   const [showtable, setshowtable] = useState(false);
   const [filtereddata, setfiltereddata] = useState([])
   useEffect(() => {
      d3.csv(csvfile).then((d) => {
         setData(d);
         setLoading(false);
      });
   }, [])

   const handleDaterange = () => {
      console.log("data ", data)
      console.log("fromdate", new Date(fromdate));
      console.log("TOdate", new Date(Todate));
      console.log("customdate", new Date(Date.parse(("2023/09/22"))));
      var endDate = new Date(Todate) + 24;
      console.log("endate", endDate);

      let resultdata = data.filter(datafiltered => {
         var dateParts = datafiltered.Date.split("/");
         var formatedDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

         return formatedDate >= new Date(fromdate) && formatedDate <= new Date(Todate)
      }
      )
      setfiltereddata(resultdata)
      setshowtable(true);
   }
   const handleoncahnge = (dates) => {
      const [start, end] = dates;
      setfromdate(start);
      setTodate(end);

   }
   return (
      <div>
         <div style={{ backgroundColor: "#ffcb05", color: "#020101", margin: "10px", padding: "5px" }}>
            <h2>Daily User Dashboard</h2>
         </div>
         {loading && <div>loading</div>}
         {!loading &&
            <div style={{display:"flex",justifyContent:'center'}}>
               
                  <h3 style={{ float: "right",padding:'5px' }}>Select Period: </h3>
              
              
                  <DatePicker style={{ float: "left" }}
                     selected={fromdate}
                     onChange={handleoncahnge}
                     startDate={fromdate}
                     endDate={Todate}
                     minDate={new Date("2018-10-16")}
                     maxDate={new Date("2018-10-22")}
                     selectsRange
                    className="datpicker"
                  />

                  <button onClick={handleDaterange} style={{ marginLeft: "5px" }} className="btn_Align">Submit</button>
               </div>
           
         }
         {showtable ?
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <BarChart filterdata={filtereddata}></BarChart>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <Tablechart data={filtereddata}></Tablechart>
               </div>
            </div> : <div></div>}
      </div>
   )
}