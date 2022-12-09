const database=("../model/dataBase")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Ashwini@3105",
        database: "second_project",
    },
});

get_data=(req,res)=>{
    knex.from('meraki_data').select("*")
    .then((rows)=>{
        res.send(rows)
    })
}

Id_by_data=(req,res)=>{
    knex.from('meraki_data').select("*").where({"id":req.params.id})
    .then((row)=>{
        res.send(row)
    })
}
update_data=(req,res)=>{
    knex.from("meraki_data") 
    .where("id","=",req.params.id)
     .update({id:req.body.id, name:req.body.name, logo:req.body.notes, days_to_complete:req.body.days_to_complete, short_description:req.body.short_description, type:req.body.type, course_type:req.body.course_type, lang_available:req.body.lang_available })
      .then(()=>{
           console.log(" successfully")
           res.send({massage:"successfully"}) 
       }) 
       .catch((err)=>{
       console.log(err)
   }) 
}
Post_data = (req, res) => {
    const new_data = req.body;
    knex.schema.hasTable("meraki_data").then(function(exists) {
        if (exists) {
            res.send('new data added ')
            return knex("meraki_data").insert({ id: new_data.id, name: new_data.name, logo: new_data.logo, notes: new_data.notes, days_to_complete: new_data.days_to_complete, short_description: new_data.short_description, type: new_data.type, lang_available: new_data.lang_available.toString() })
        }
    })
}

delete_data = (req, res) => {
    const { id } = req.params
    knex.schema.hasTable("meraki_data").then(function(exists) {
        if (exists) {
            res.send("data deleted");
            return knex("meraki_data").where("id", id).del();
        }
    })
}


module.exports={get_data,Id_by_data,update_data,delete_data}
