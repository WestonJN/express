
require("dotenv").config();

const Client = require("pg").Client;
const client = new Client({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});

client.connect()
const createTable = async() =>{
    try {
        const sql =await client.query(
                `CREATE TABLE "public"."visitors" (
                    "visitor_name" character varying(30),
                    "assistant" character varying(30),
                    "visitor_age" integer,
                    "date_of_visit" VARCHAR,
                    "time_of_visit" time without time zone,
                    "comments" character varying(350),
                    CONSTRAINT "visitors_pkey" PRIMARY KEY ("visitor_id")
                ) WITH (oids = false);
                `
        )
    } catch (error) {
        console.log(e)
    }
}

const addNewVisitor = async(name,age,date,time,assistant,comments) => {
  
    const sql='INSERT INTO visitors(visitor_name,visitor_age,date_of_visit,time_of_visit,assistant,comments) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values= 
      [name,age,date,time,assistant,comments];
	try {
		let query = await client.query(sql,values)
		return query.rows
	} catch(e) {
        console.log(e);
        await client.end()
	}
  }

module.exports ={
    addNewVisitor,
    createTable
}
