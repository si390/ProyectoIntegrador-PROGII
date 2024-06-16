module.exports = function(sequelize, dataTypes){
    let alias = "Comentario"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,               
            type: dataTypes.INTEGER,
        },
        usuarioId: { 
            type: dataTypes.INTEGER,
        },
        productoId: { 
            type: dataTypes.INTEGER,
        },
        texto:{
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
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }

    let Comentario = sequelize.define(alias, cols, config)



    Comentario.associate = function(models){
        
        Comentario.belongsTo(models.Product, { 
            as: "producto",
            foreignKey: 'productoId' });

        Comentario.belongsTo(models.Usuario, { 
            as:"usuario",
            foreignKey: 'usuarioId' });
    };

    return Comentario
}