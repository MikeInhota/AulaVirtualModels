const Produto = (sequelize, DataTypes) => {
    var produto = sequelize.define(
        'Produto',
        {
            id_produto: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING(150),
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING(300),
                allowNull: true
            },
            preco: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
            fk_categoria:  {
                type: DataTypes.INTEGER,
                allowNull:false,
                references: {
                model: "Categoria", 
                key: "id_categoria"
                }
            },
            imagem: {
                type: DataTypes.STRING(500),
                allowNull: true
            },
            fk_editora:  {
                type: DataTypes.INTEGER,
                allowNull:false,
                references: {
                model: "Editora", 
                key: "id_editora"
                }
            }
        },{
            tableName: "produto",
            timestamps: false
        }

    );

    produto.associate = (models) => {
        produto.belongsTo(models.Editora, {foreignKey: 'fk_editora', as:'editora'})
        produto.belongsTo(models.Categoria, {foreignKey: 'fk_categoria', as:'categoria'})
    }
    return produto;
}

module.exports = Produto;