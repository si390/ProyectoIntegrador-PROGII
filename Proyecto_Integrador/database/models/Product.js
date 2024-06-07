module.exports = function(sequelize, dataTypes){
    let alias = "Product"

    let cols = {
        productoId:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        color:{
            type: dataTypes.STRING,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsToMany(models.Usuario, {
            as: 'usuarios',
            through: "Comentario",
            foreignKey: 'productoId',
            timestamps: true,
        });
    };

    return Product
}