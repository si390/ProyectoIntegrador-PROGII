module.exports = function(sequelize, dataTypes){
    let alias = "Comentario"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,               //Sacar primary key//
            type: dataTypes.INTEGER,
        },
        usuario:{
            type: dataTypes.STRING,
        },
        fotoPerfil: {
            type: dataTypes.STRING,         
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

    //CONECTAR ACÁ CON USUARIO Y PRODUCTO//

    return Comentario
}