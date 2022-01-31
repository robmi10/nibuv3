import React, {useState, useEffect} from 'react'
import "./Product.css"
import "../../Menu/Menu.css"
import IXtoken from "../../../effects/IXlogo/ixlogo"
import "aos/dist/aos.css"
import Aos from 'aos'

const Product = () => {
    const [onHover, setHover] = useState(false)
    const [onHover2, setHover2] = useState(false)

    useEffect(() => {
        
        Aos.init({duration: 2000});

    }, [])

    return (
        <>
            <div >         
             
                           
                        
                            <div className ="ProductImageDiv" >
                                <div className="header_page">↘ Planet IX</div>
                                <div className="header_text" >
                                Bor sus, testis eiciissit dolorat inciam quibus estrum quis expelit amus nit aut es dollorum quos nonserf erferfe 
                                ressequid mossimus, que nis alique pel ipit, opta si ommolut emporro verchilit voluptatur molut remporro volor 
                                res aut aturibus et fuga. Ut voluptatus dit quis doluptat.
                                Uga. Itam voles voluptate nobistint que nobistem eveliqui rem is alit, quaestestiam voluptatem hitam que non 
                                ent quis con renihita corerfe riorum quiam, etur sequi aut dunt explatquas quisque mini delent quame non eus 
                                aliciet, nulles et et ea nonsecati reruntet idebist iuscita aditatu stecae nos doluptatem adis voluptat et occabus
                                da quat eum iur a dolo molupta qui core enducit enisque omnimpos voluptas num eumque 
                                </div>

                                <div className ="MenuFont HeaderDivToPlanetIx" >
                                        GO TO PLANETIX.COM
                                </div>
                                
                            </div>
                                    <div className ="ProductDiv2">

                                   
                                    <div className="header_page2">
                                    ↘ IXT-Token  
                                    </div>

                                    <div className ="text2grid" >
                                            <div className ="header_text2" >
                                            Bor sus, testis eiciissit dolorat inciam quibus estrum quis expelit amus nit aut es dollorum quos nonserf erferfe 
                                            ressequid mossimus, que nis alique pel ipit, opta si ommolut emporro verchilit voluptatur molut remporro volor 
                                            res aut aturibus et fuga. Ut voluptatus dit quis doluptat.
                                            Uga. Itam voles voluptate nobistint que nobistem eveliqui rem is alit, quaestestiam voluptatem hitam que non 
                                            ent quis con renihita corerfe riorum quiam, etur sequi aut dunt explatquas quisque mini delent quame non eus 
                                            aliciet, nulles et et ea nonsecati reruntet idebist iuscita aditatu stecae nos doluptatem adis voluptat et occabus
                                            da quat eum iur a dolo molupta qui core enducit enisque omnimpos voluptas num eumque 
                                            </div>


                                            <div className ="grid_divider1" >    
                                                <div style ={{marginTop: "24px"}}>
                                                    <div style = {{display: 'block'}}>CURRENT PRICE</div> 
                                                    <div style = {{display: 'block'}}>2.52 $</div>                                                    
                                                </div>   
                                                
                                            </div>


                                            <div className ="grid_divider2" >
                                                <div style ={{marginTop: "24px"}}> 
                                                        <div style = {{display: 'block'}}>VIEW ON</div> 
                                                        { onHover ? <div onMouseLeave={() => {setHover(!onHover)}} style = {{display: 'block', cursor: 'pointer'}}>→ SUSHI SWAP</div> : <div onMouseOver={() => {setHover(!onHover)}} style = {{display: 'block'}}>                    
                                                        ˃ SUSHI SWAP </div>} 
                                    
                                                        { onHover2 ? <div onMouseLeave={() => {setHover2(!onHover2)}} style = {{display: 'block', cursor: 'pointer'}}>→ UNI SWAP</div> : <div onMouseOver={() => {setHover2(!onHover2)}} style = {{display: 'block'}}>                    
                                                        ˃ UNI SWAP </div>} 
                                                </div>
                                            </div>

                                    </div>

                         
                                    </div>


                            <div className ="ProductImageDiv2">
                                    <IXtoken/>
                            </div>
            </div>

        </>
    )
}

export default Product
