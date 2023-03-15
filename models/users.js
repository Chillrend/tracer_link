const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_jurusan: {
      type: DataTypes.UUID,
      allowNull: true
    },
    id_program_studi: {
      type: DataTypes.UUID,
      allowNull: true
    },
    userable_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userable_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama_user: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    profile_picture: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "default_picture.png"
    },
    remember_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    expired_at: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
