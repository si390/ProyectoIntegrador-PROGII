module.exports = function(sequelize, dataTypes){
    let alias = "Usuario"

    let cols = {
        Id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        username: {
            type: dataTypes.STRING,
            unique: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasenia: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.INTEGER,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        fotoPerfil: {
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
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Product, {
            as: 'productos',
            foreignKey: 'usuarioId',
        });
        Usuario.belongsToMany(models.Comentario, {
            as: 'usuarioComentarios',
            through: 'comentarios',
            foreignKey: 'usuarioId',
            otherKey: 'comentarioId',
        });
    };

    return Usuario;
}