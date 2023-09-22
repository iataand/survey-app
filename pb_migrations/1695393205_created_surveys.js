/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zymggvc4mf91psz",
    "created": "2023-09-22 14:33:25.715Z",
    "updated": "2023-09-22 14:33:25.715Z",
    "name": "surveys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jjer4vb8",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vxf85yr2",
        "name": "questions",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zymggvc4mf91psz");

  return dao.deleteCollection(collection);
})
