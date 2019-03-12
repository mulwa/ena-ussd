const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('*', (req, res)=>{
    res.send('Ussd App running')
});
app.post('*',(req,res)=>{
    let {SESSION_ID, SERVICE_CODE, MSISDN, USSD_STRING } = req.body;
    // initial request
    if(USSD_STRING == ''){
        let response = `CON Please Select Service ${SESSION_ID} ${SERVICE_CODE} ${MSISDN}
        1. Buy Ticket
        2. My Tickets
        3. Payments`
        res.send(response)
    }else if( USSD_STRING == '1'){
        let response = `CON 
        1. Bus
        2. Matatu
        3. Ferry`
        res.send(response)
    }else if (USSD_STRING == '1*1'){
        let response = `END Bus Tickets comming soon`
        res.send(response)

    }else if (USSD_STRING == '1*2'){
        let response = `END Matatu tickets comming soon`
        res.send(response)
    }else if (USSD_STRING =='1*3'){
        let response = `END Ferru tickets comming soon`
        res.send(response)
    }else if (USSD_STRING =='2'){
        let response = `CON 
        1. Active
        2. Upcomming 
        3. Past Tickets`
        res.send(response)
    }else if (USSD_STRING == '3'){
        let response = `CON 
        1. Fuel
        2. Insurance
        3. Savings
        4. Withdraw`
        res.send(response)
    }
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
console.log('app loading usd');