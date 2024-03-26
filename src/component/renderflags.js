import styles from './renderflags.module.css'
import React from "react"
import axios from "axios"
import "./renderflags.css"
import { useEffect, useState } from 'react'

function Renderflags() {
    const baseURL = "https://restcountries.com/v3.1/all"
    const [flagdata, setflagdata] = useState([])
    const [tempflagdata, setTempflagdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data)
            setflagdata(response.data)
            setTempflagdata(response.data)
            setloading(false)
        }).catch((error) => {
            console.log('Error fetching data:', error);
            setloading(true)
            // You can set an error state or handle the error in any other way here
        });
    }, [])

    const handlechange = ((event)=>{
        if(event.target.value == ''){
            setflagdata(tempflagdata)
        }else{
            const filteredArray = flagdata.filter(obj => obj.name.common.includes(event.target.value));
            console.log(filteredArray)
            setflagdata(filteredArray)
        }
        
    })
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className={styles.inputdiv}>
                        <input className={styles.inputcss} type='text' placeholder='Search for Countries' onChange={handlechange}/>
                    </div>
                    <div className={styles.container}>
                        {flagdata.map((ele) => (

                            <div className='countryCard'>
                                <img key={ele} src={ele.flags.png} alt={ele.flags.alt} className={styles.imgclass} />
                                <div>
                                    <p>{ele.name.common}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Renderflags