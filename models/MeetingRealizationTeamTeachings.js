const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MeetingRealizationTeamTeachings', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_realisasi_pertemuan: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id_pegawai: {
      type: DataTypes.UUID,
      allowNull: false
    },
    jpl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'MeetingRealizationTeamTeachings',
    schema: 'siakad',
    timestamps: true,
    indexes: [
      {
        name: "MeetingRealizationTeamTeachings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
