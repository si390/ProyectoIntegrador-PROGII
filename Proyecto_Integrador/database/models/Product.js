module.exports = function(sequelize, dataTypes){
    let alias = "Product";

    let cols = {
        Id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        imagen: {
            type: dataTypes.STRING(100),
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        color: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        usuarioId: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
        paranoid: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
    };

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuarioId',
        });
        Product.belongsToMany(models.Comentario, {
            as: 'productComentarios',
            through: 'comentarios',
            foreignKey: 'productoId',
        });
    };

    return Product;
}