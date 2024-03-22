import styles from './renderflags.module.css'
import React from "react"
import axios from "axios"
import { useEffect, useState } from 'react'

function Renderflags() {
    const baseURL = "https://restcountries.com/v3.1/all"
    const [flagdata, setflagdata] = useState([])

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data)
            setflagdata(response.data)
        })
    }, [])
    return (
        <div className={styles.container}>
        {flagdata.map((ele) => (

            <div className={styles.box}>
                <img src={ele.flags.png} alt={ele.flags.alt} className={styles.imgclass}/>
                <div>
                <p>{ele.name.common}</p>
                </div>
            </div>

            ))}
        </div>
    )
}

export default Renderflags