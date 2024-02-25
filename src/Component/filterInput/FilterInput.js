import React,{useState} from 'react';
import styles from './FilterInput.module.css'

const Filter = ({filtration}) => {
    const[filter,setfilter]=useState("");

    const filterHandler =(e)=>{
        const name=e.target.value;
        setfilter(name);
        filtration(name);
    };


    return (
        <div className={styles.mp}>
                  <div>
                  <input type='text' 
                  placeholder='for test'
                  value={filter}
                   onChange={filterHandler} />
                 </div>
            
        </div>
    );
}
export default Filter;
