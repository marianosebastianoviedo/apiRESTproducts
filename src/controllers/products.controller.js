import { getConnection, sql, queries } from "../database";

export const getProducts = async (req , res) => {
    try {
        const pool = await getConnection();
        const result= await pool.request().query(queries.getAllProducts);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 
export const getTotalProducts = async (req , res) => {
    try {
        const pool = await getConnection();
        const result= await pool.request().query(queries.getTotalProducts);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 
export const createNewProduct = async (req , res) => {
    const { Name , Description } = await req.body;
    let { Quantity } = await req.body;
    if (Name == null || Description == null) {
        return res.status(400).json({
            msg: 'Bad request, Please fill all fields'
        });
    } 
    if (Quantity == null) {
        Quantity = 0;
    }

    try {
        const pool = await getConnection();
        pool.request()
        .input('name', sql.VarChar , Name)
        .input('description', sql.Text , Description)
        .input('quantity', sql.Int , Quantity)
        .query(queries.addNewProduct);
        
        res.json({Name, Description, Quantity});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
} 
export const getProductById = async (req , res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input('Id',id)
        .query(queries.getProductById);
        
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 
export const deleteProductById = async (req , res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input('Id',id)
        .query(queries.deleteProduct);
        res.json(result.rowsAffected[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 
export const updateProductById = async (req , res) => {
    try {
        const { Name , Description, Quantity } = await req.body;
        const { id } = req.params;
        if (Name == null || Description == null || Quantity == null) {
            return res.status(400).json({
                msg: 'Bad request, Please fill all fields'
            });
        }
        const pool = await getConnection();
        await pool.request()
        .input('name', sql.VarChar , Name)
        .input('description', sql.Text , Description)
        .input('quantity', sql.Int , Quantity)
        .input('Id', sql.Int ,id)
        .query(queries.updateProductById);
        res.json({ Name , Description, Quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
} 