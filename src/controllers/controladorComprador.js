const controlador = {};

controlador.lista = (req,res) => {
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err, fila)=>{

            res.render('home', {
                title :"mundo de la bases de datos",
                data: fila
            } );
        });
    });
};

controlador.guardar = (req,res)=>{
req.getConnection((err,conn)=>{

    const datos = req.body;

    conn.query('INSERT INTO customer set ?', [datos], (err,comprador)=>{
    res.redirect('/')
    });

})
};

/*
controlador.borrar = (req,res)=>{
    req.getConnection((err,conn)=>{})
    };
*/
module.exports = controlador ;