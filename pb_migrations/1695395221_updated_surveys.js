/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zymggvc4mf91psz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tt5mfvvn",
    "name": "answers",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zymggvc4mf91psz")

  // remove
  collection.schema.removeField("tt5mfvvn")

  return dao.saveCollection(collection)
})
