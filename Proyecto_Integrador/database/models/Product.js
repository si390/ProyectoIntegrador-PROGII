module.exports = (sequelize, DataTypes) => {
    let alias = "Product";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        imagen: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            onUpdate: DataTypes.NOW,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        usuario_Id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
        paranoid: true,
    };

    let Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_Id",
        });

        Product.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "producto_Id",
        });
    };

    return Product;
};