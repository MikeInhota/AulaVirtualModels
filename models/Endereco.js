const Endereco = (sequelize, DataTypes) => {
    var endereco = sequelize.define(
        'Endereco',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            endereco: {
                type: DataTypes.STRING,
                allowNull: false
            },
            numero: DataTypes.INTEGER,
            complemento: {
                type: DataTypes.STRING,
                allowNull: true
            },
            cep: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            uf: {
                type: DataTypes.STRING(2),
                allowNull: false
            },
            fk_usuario:  {
                type: DataTypes.INTEGER,
                allowNull:false,
                references: {
                model: "Usuario", 
                key: "id_usuario"
                }
            }
        },{
            tableName: "endereco",
            timestamps: false
        }
    );
    endereco.associate = (models) => {
        endereco.belongsTo(models.Usuario, {foreignKey: 'fk_usuario', as:'usuario'})
    }
    return endereco;
}
module.exports = Endereco;