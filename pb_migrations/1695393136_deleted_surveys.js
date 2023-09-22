/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a5aq9hyw28lfnxw");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "a5aq9hyw28lfnxw",
    "created": "2023-09-22 14:31:18.930Z",
    "updated": "2023-09-22 14:31:18.930Z",
    "name": "surveys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uofhrhay",
        "name": "testSurvey",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
