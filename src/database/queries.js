export const queries = {
    getAllProducts: 'SELECT * FROM [Ciudadanos360_QA].[dbo].[Products]',
    getTotalProducts: 'SELECT COUNT(*) as Total FROM [Ciudadanos360_QA].[dbo].[Products] ',
    addNewProduct: 'INSERT INTO [Ciudadanos360_QA].[dbo].[Products] (name,description,quantity) VALUES (@Name,@Description,@Quantity)',
    getProductById: 'SELECT * FROM [Ciudadanos360_QA].[dbo].[Products] WHERE Id = @Id',
    updateProductById: 'UPDATE [Ciudadanos360_QA].[dbo].[Products] SET name = @Name, description = @Description, quantity = @Quantity WHERE Id = @Id',
    deleteProduct: 'DELETE FROM [Ciudadanos360_QA].[dbo].[Products] WHERE Id = @Id'
}
export const PROCEDURES = {
    getAllProducts: 'EXEC getAllProducts',
    getTotalProducts: 'EXEC getTotalProducts',
    addNewProduct: 'EXEC addNewProduct @Name, @Description, @Quantity',
    getProductById: 'EXEC getProductById @Id',
    updateProductById: 'EXEC updateProductById @Id, @Name, @Description, @Quantity',
    deleteProduct: 'EXEC deleteProduct @Id'
}