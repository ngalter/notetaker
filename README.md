# Notetaker

## Description

Notetaker is an application that can be used to write, save, and delete notes. This application uses an express backend to save and retrieve note data from a JSON file.

* The application frontend consists of two html files, notes.html and index.html

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes.  

* API routes:

  * GET `/api/notes` - Reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Receives a query paramter containing the id of a note to delete. 

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

Taking notes is an excellent way to stay organized.  An online note taking app blends the new and the old.  Notes are easy and accessable.
