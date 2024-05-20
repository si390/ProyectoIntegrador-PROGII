module.exports = function(sequelize, dataTypes){
    let alias = "Usuario"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        contrasenia:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.INTEGER,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        foto:{
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config)
    return Usuario
}