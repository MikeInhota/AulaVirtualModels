const Pedido = (sequelize, DataTypes) => {
    var pedido = sequelize.define(
        'Pedido',
        {
            id_pedido: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            status: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            fk_usuario:  {
                type: DataTypes.INTEGER,
                allowNull:false,
                references: {
                model: "Usuario", 
                key: "id_usuario"
                }
            },
        },{
            tableName: "pedido",
            timestamps: false
        }

    );

    pedido.associate = (models) => {
        pedido.belongsTo(models.Usuario, {foreignKey: 'fk_usuario', as:'usuario'})
    }
    return pedido;
}

module.exports = Pedido;