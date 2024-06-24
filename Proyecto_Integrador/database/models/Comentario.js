module.exports = function(sequelize, DataTypes) {
    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        producto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        texto: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            onUpdate: DataTypes.NOW,
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true,
        paranoid: true,
    };

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "producto_Id",
        });

        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_Id",
        });
    };

    return Comentario;
};