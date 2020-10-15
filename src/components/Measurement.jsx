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
                <div className="progess">
                    <div className="display-positive" 
                     style={{ borderRight : "5px solid #94E28E",
                              borderBottom : "5px solid #94E28E" }}>
                        { errorValue }
                    </div>
                </div>
        }else {
                positive = 
                <div className="progess">
                    <div className="display-negative" 
                     style={{ borderRight : "5px solid #F24429",
                              borderBottom : "5px solid #F24429" }}>
                        { errorValue }
                    </div>
                </div>
        }
    return(
        <div>
            <div className="col-md-4p-1 py-1 pl-2" style={{
                backgroundColor: "#F3F4F6"
            }}> { title } </div>
            <div className="col-md-4 bg-warning px-0">
                <div className="d-flex bg-info p-2 random">
                    <div>
                        { positive }
                    </div>
                    <div className="card m-1 col-md-7 p-1 bg-secondary">
                        <p>{ 
                            resToday.split(' ').slice(1).join(' ') 
                        }</p>
                        <p>{ measurement.duration } Hours</p>
                    </div>
                    <div className=" card m-1 col-md-3 p-1 border">
                        <p> { errorValue } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Measurement
