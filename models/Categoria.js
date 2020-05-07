const Categoria = (sequelize, DataTypes) => {
    var categoria = sequelize.define(
        'Categoria',
        {
            id_categoria: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        },{
            tableName: "categoria",
            timestamps: false
        }

    );

    categoria.associate = (models) => {
        categoria.hasMany(models.Produto, {foreignKey: 'fk_categoria', as:'produtos'})
    }
    return categoria;
}

module.exports = Categoria;