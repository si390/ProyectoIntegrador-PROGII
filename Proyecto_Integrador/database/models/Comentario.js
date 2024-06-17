module.exports = function(sequelize, dataTypes){
    let alias = "Comentario"

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,               
            type: dataTypes.INTEGER,
        },
        usuarioId: { 
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        productoId: { 
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        texto:{
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW,
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW,
            onUpdate: dataTypes.NOW,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true,
        paranoid: true,
    }

    let Comentario = sequelize.define(alias, cols, config)

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Product, { 
            as: "producto",
            foreignKey: 'productoId', 
        });

        Comentario.belongsTo(models.Usuario, { 
            as: "usuario",
            foreignKey: 'usuarioId', 
        });
    };

    return Comentario;
}