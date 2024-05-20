module.exports = function(sequelize, dataTypes){
    let alias = "Comentario"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario:{
            type: dataTypes.STRING,
        },
        texto:{
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }

    let Comentario = sequelize.define(alias, cols, config)
    return Comentario
}