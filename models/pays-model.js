'use strict'

var connection = require('./tutorial-connection'),
    TutorialModel = () => {}

    // TutorialModel.getAllPersons = (callback) => connection.query('SELECT * FROM tb_persons INNER JOIN tb_user ON tb_persons.id_person=tb_user.id_user',callback);
    TutorialModel.getAllPersons = (data,callback) => {
        connection.query('SELECT * FROM tb_persons WHERE id_person = ?',data.user,callback);
    }
    
// TutorialModel.getAll = (callback) => connection.query('SELECT * FROM Tutorial', callback)
// TutorialModel.getOne = (Tutorial_id, callback) => connection.query('SELECT * FROM Tutorial WHERE Tutorial_id = ?', Tutorial_id, callback)
// TutorialModel.insert = (data, callback) => connection.query('INSERT INTO Tutorial SET ?', data, callback)
// TutorialModel.update = (data, callback) => connection.query('UPDATE Tutorial SET ? WHERE Tutorial_id = ?', [data, data.Tutorial_id],callback)
// TutorialModel.delete = (Tutorial_id, callback) => connection.query('DELETE FROM Tutorial WHERE Tutorial_id = ?',Tutorial_id,callback)

module.exports = TutorialModel