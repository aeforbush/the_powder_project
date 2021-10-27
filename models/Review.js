const {Model, DataTypes} = require('sequelize');

const sequalize = require("../config/connection");

class Review extends Model{};

Review.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewText: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'user',
            key:'id'
        }
    },
    content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'user',
            key:'id'
        }
    }
})