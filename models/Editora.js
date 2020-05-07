const Editora = (sequelize, DataTypes) => {
    var editora = sequelize.define(
        'Editora',
        {
            id_editora: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull:false
            },
            nome: {
                type: DataTypes.STRING(145),
                allowNull: true
            }
        },{
            tableName: "editora",
            timestamps: false
        }

    );

    editora.associate = (models) => {
        editora.hasMany(models.Produto, {foreignKey: 'fk_editora', as:'produtos'})
    }
    return editora;
}

module.exports = Editora;