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
        //tableName: "usuarios",
        //timestamps: true,
        //underscored: true
        createdAt: "created_at",
        updated_at: "updated_at",
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Product,{
            as: 'producto',
            foreignKey: 'usuarioId',
            timestamps: true,
        });
        Usuario.hasMany(models.Comentario,{
            as: 'comentarios',
            through: "comentarios",
            foreignKey: 'comentarioId',
            timestamps: true,
        });
    };

    return Usuario
}