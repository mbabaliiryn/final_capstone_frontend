import React from 'react'

const Summary = ( { activities }) => {
    let newArray = []
        activities.forEach(element => {
           newArray.push(parseInt(element.total)) 
        });

        let res = newArray.reduce((val, num) => val + num, 0)
        console.log(res)
    return(
        <div className="d-flex summary-section">
            {
                activities.map((val, index) => {
                    let percentageValue = parseInt(((parseInt(val.total) / res)) * 100)
                    if(percentageValue <= 25) {
                    return(
                        <div key = { index } className=" card-stuff p-2">
                            <div className="percentage-section" 
                            style={{ "border-right" : "5px solid #94E28E"}}>
                                { percentageValue } %
                            </div>
                            <div className="title-section"><p>{val.title}</p></div>
                        </div>
                    )
                    } else if ( percentageValue > 25 && percentageValue <= 50) {
                        return(
                        <div key = { index } className=" card-stuff p-2">
                            <div className="percentage-section" 
                            style={{ "border-right" : "5px solid #F24429",
                                    "border-bottom" : "5px solid #F24429"}}>
                                { percentageValue } %
                            </div>
                            <div className="title-section"><p>{val.title}</p></div>
                        </div>
                        )
                    } else if ( percentageValue > 50 && percentageValue <= 75) {
                        return(
                        <div key = { index } className=" card-stuff p-2">
                            <div className="percentage-section" 
                            style={{ "border-right" : "5px solid #94E28E",
                                    "border-bottom" : "5px solid #94E28E",
                                    "border-left" : "5px solid #94E28E"}}>
                                { percentageValue } %
                            </div>
                            <div className="title-section"><p>{val.title}</p></div>
                        </div>
                        )
                    } else {
                        return(
                            <div key = { index } className=" card-stuff p-2">
                            <div className="percentage-section" 
                            style={{ "border" : "5px solid #F24429"}}>
                                { percentageValue } %
                            </div>
                            <div className="title-section"><p>{val.title}</p></div>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Summary