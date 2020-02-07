const db = require("../db/db.json");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        res.json(db);
    });
    
    app.post("/api/notes", (req, res) => {
        const lastId = db.length ? Math.max(...(db.map(note => note.id))) : 0;
        const id = lastId + 1;
        db.push({ id, ...req.body});
        res.json(db.slice(-1));
      });

    app.delete('/api/notes/:id', (req, res) => {
        let note = db.find( ({ id }) => id === JSON.parse(req.params.id));
        db.splice( db.indexOf(note), 1);
        res.end("Deleted");
    });

};