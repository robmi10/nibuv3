import React, { useEffect, useContext , useState } from 'react'
import { Context } from '../../Context/Context';

export const Coinmarketcap = () => {
    //const [ixtprice, setIxtprice] = useState(0)
    const {ixtprice, setIxtprice} = useContext(Context);
    const [reload, setReload] = useState(true);
    
    const get_coinmarketcap_data = () =>{
        console.log("coinmarketcap!")
         let url = "https://api.coingecko.com/api/v3/simple/price?ids=ix-token&vs_currencies=usd", 
         qString = "?CMC_PRO_API_KEY=" + "1db9fb69-b09c-43f2-bf14-55e8072f9215" + "&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD";
         fetch(url, {
            headers: {
                
                Accept: 'application/json',
            },
            },
            ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                console.log("Current response ->", json);

                console.log("Current usdt ->", json["ix-token"]["usd"]);

                setIxtprice(json["ix-token"]["usd"])
                });
            }
            else{
                console.log("response error ->", response)
                console.log("curr new resp ->", response.statusText)
                console.log("response status ->", response.status)
            }
            }).catch(error => {
                console.log("current error ->", error)
            });

    }

    useEffect(() => {
      
       const currintervarl =  setInterval(() => {
            get_coinmarketcap_data()
        }, 1000);
      
        return() =>{ clearInterval(currintervarl)}
    }, [reload])
    
  return (
    <>
    </>
  )
}
