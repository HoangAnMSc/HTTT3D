const sql = require("mssql/msnodesqlv8");
const config = {
    server:"localhost",
    user: "sa",
    password: "123456",
    server: "DESKTOP-OT7KKUK",
    database: "dialy",
    driver:"msnodesqlv8",
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "",
    },
 
};

async function getdata(){
    try{
        const conn = new sql.ConnectionPool(config).connect();
        console.log("SQL connected");
    } catch(err){
        console.log(err);
    }
}
  module.exports = {
      getdata: getdata,
  };
  
