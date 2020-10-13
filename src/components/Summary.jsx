import React from 'react'

const Summary = ( { activities }) => {
    let newArray = []
        activities.forEach(element => {
           newArray.push(parseInt(element.total)) 
        });

        let res = newArray.reduce((val, num) => val + num, 0)
        console.log(res)
    return(
        <div>
            {
                activities.map((val, index) => {
                    let percentageValue = parseInt(((parseInt(val.total) / res)) * 100)
                    if(percentageValue <= 25) {
                    return(
                        <div key = { index } >
                            <div>
                                { percentageValue } %
                            </div>
                            <div ><p>{val.title}</p></div>
                        </div>
                    )
                    } else if ( percentageValue > 25 && percentageValue <= 50) {
                        return(
                        <div key = { index } >
                            <div>
                                { percentageValue } %
                            </div>
                            <div ><p>{val.title}</p></div>
                        </div>
                        )
                    } else if ( percentageValue > 50 && percentageValue <= 75) {
                        return(
                        <div key = { index } >
                            <div >
                                { percentageValue } %
                            </div>
                            <div ><p>{val.title}</p></div>
                        </div>
                        )
                    } else {
                        return(
                            <div key = { index } >
                            <div>
                                { percentageValue } %
                            </div>
                            <div><p>{val.title}</p></div>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Summary