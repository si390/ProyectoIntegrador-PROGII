module.exports = function(sequelize, DataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        contrasenia: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        fecha: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true,
        deletedAt: 'deleted_at',
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Product, {
            as: "productos",
            foreignKey: "usuario_Id",
        });

        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id",
        });
    };

    return Usuario;
};