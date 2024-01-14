// database.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todoApp.db');

// Create tables if not exists
db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);'
  );
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, groupId INTEGER, title TEXT, description TEXT, isCompleted INTEGER);'
  );
  console.log("Dummy tables got created");
});

// Functions to interact with the database

export const getGroups = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM groups;', [], (_, result) => {
        const groups = result.rows._array;
        resolve(groups);
      });
    });
  });
};

export const getTodos = (groupId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM todos WHERE groupId = ?;', [groupId], (_, result) => {
        const todos = result.rows._array;
        resolve(todos);
      }, (_, error) => {
        reject(error);
      });
    });
  });
};

export const addGroup = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO groups (name) VALUES (?);', [name], (_, result) => {
        resolve(result.insertId);
      });
    });
  });
};

export const addTodo = (groupId, title, description) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO todos (groupId, title, description, isCompleted) VALUES (?, ?, ?, 0);',
        [groupId, title, description],
        (_, result) => {
          resolve(result.insertId);
        }
      );
    });
  });
};

export const updateTodo = (todoId, { title, description, isCompleted }) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        const updateFields = [];
        const values = [];
  
        if (title !== undefined) {
          updateFields.push('title = ?');
          values.push(title);
        }
  
        if (description !== undefined) {
          updateFields.push('description = ?');
          values.push(description);
        }
  
        if (isCompleted !== undefined) {
          updateFields.push('isCompleted = ?');
          values.push(isCompleted);
        }
  
        tx.executeSql(
          `UPDATE todos SET ${updateFields.join(', ')} WHERE id = ?;`,
          [...values, todoId],
          (_, result) => {
            resolve(result.rowsAffected > 0);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  };
  
  export const deleteTodo = (todoId) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DELETE FROM todos WHERE id = ?;', [todoId], (_, result) => {
          resolve(result.rowsAffected > 0);
        }, (_, error) => {
          reject(error);
        });
      });
    });
  };

  export const deleteGroup = (groupId) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DELETE FROM groups WHERE id = ?;', [groupId], async (_, result) => {
          if (result.rowsAffected > 0) {
            // If the group is deleted, delete its associated tasks
            await deleteGroupTasks(groupId);
            resolve(true);
          } else {
            resolve(false);
          }
        }, (_, error) => {
          reject(error);
        });
      });
    });
  };
  
  const deleteGroupTasks = (groupId) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql('DELETE FROM todos WHERE groupId = ?;', [groupId], (_, result) => {
          resolve(result.rowsAffected > 0);
        }, (_, error) => {
          reject(error);
        });
      });
    });
  };