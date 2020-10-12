import React from 'react'

const Measurement = ({ measurement, index, diffVal }) => {
    let date = new Date(measurement.date);
    let res = date.toUTCString()
    let today = new Date()
    let resToday
    let arrayDummy = []

    let dayToday = today.toUTCString().split(' ')[0]
    let dayDate = date.toUTCString().split(' ')[0]

    let dateToday = parseInt(today.toUTCString().split(' ')[1])  
    let dateDate = parseInt(date.toUTCString().split(' ')[1]) 

    let monthToday = today.toUTCString().split(' ')[2]
    let monthDay = date.toUTCString().split(' ')[2]

    if( dayToday === dayDate 
        && dateToday === dateDate 
        && monthToday === monthDay 
        ){
            let test = res.split(' ')
            test.splice(0,1)
            test.unshift('Today, ')
            test.splice(4, 2)
            resToday = test.join(' ')
           
        } else if (
            parseInt(dateDate) === (parseInt(dateToday) - 1)
            && monthToday === monthDay
        ){
            let test = res.split(' ')
            test.splice(0,1)
            test.unshift('Yesterday, ')
            test.splice(4, 2)
            resToday = test.join(' ')
        } else{
            resToday = res
        }

        let title = resToday.split(' ')[0]
        arrayDummy.push(parseFloat(measurement.duration))

        let errorValue;

        if(diffVal[index + 1]){
            errorValue = parseFloat( diffVal[index + 1] ).toFixed(3)
        }else{
            errorValue = parseFloat('0.00').toFixed(2)
        }

        let positive;
        if(errorValue <= 0){
                positive = 
                <div>
                    <div>
                        { errorValue }
                    </div>
                </div>
        }else {
                positive = 
                <div>
                    <div>
                        { errorValue }
                    </div>
                </div>
        }
    return(
        <div>
            <div> { title } </div>
            <div>
                <div>
                    <div>
                        { positive }
                    </div>
                    <div>
                        <p>{ 
                            resToday.split(' ').slice(1).join(' ') 
                        }</p>
                        <p>{ measurement.duration } Hours</p>
                    </div>
                    <div>
                        <p> { errorValue } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Measurement
