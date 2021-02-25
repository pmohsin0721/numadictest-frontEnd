import React ,{useState} from 'react';
import "../Styles/Interactions.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Table from './Table'


const Interactions = () => {
  const [startDate,setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);



    return(
        <>
        <div className="container">
            <h1 className="heading">Place Interactions</h1>
            <div className="date-picker">
                <label>Start Date:
            <DatePicker className='date' selected={startDate} 
            onChange={ date1 => setstartDate(date1)}
            dateFormat='yyyy/MM/dd' />
            </label>
            <br />
            <label >End Date:
             <DatePicker className='date'
               selected={endDate} 
            onChange={ date2 => setendDate(date2)}
            dateFormat='yyyy/MM/dd' />
            </label>
            </div>
            <button className="search-button">search</button>
            <Table />
        </div>
        
        </>
    );
}

export default Interactions;