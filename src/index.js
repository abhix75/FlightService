const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    // bad code alert
    // const {Airport ,City } =require('./models');
    // const Npd= await City.findByPk(1);
    // console.log(Npd);
    // // const Npdairport = await Npd.createAirport({name:'mikumegha Airport',code: 'MGH'});
    // // console.log(Npdairport);
    // const airportInNpd=await Npd.getAirports();
    // console.log(airportInNpd)
});
