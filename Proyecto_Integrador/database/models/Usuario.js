module.exports = function(sequelize, dataTypes){
    let alias = "Usuario"

    let cols = {
        usuarioId:{
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
        fotoPerfil:{
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
        tableName: "usuarios",
        timestamps: true,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Product,{
            as: 'productos',
            through: models.Comentario,
            foreignKey: 'usuarioId',
            timestamps: true,
        });
    };

    return Usuario
}