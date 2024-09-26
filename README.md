# Journal App

## Routes 

- `localhost:3000/` 
	- root or homepage 
	- Welcome screen 
	- Journal entry form / "comment box"
	- List the entries 
		- latest 5 entries? 
- `localhost:3000/entries/:entryId/`
	- View and edit individual journal entries by their entryId
	- "edit in place" for journal entry data
		- toggle between read-only and an editable form 
	- button to delete the post 
- `localhost:3000/search/:searchKey/:searchValue`
	- Show a list of journal entries where each entry matches the searchParam
- `localhost:3000/latest/`
	- List the entries
		- latest INFINITY entries 

localhost:3000/search/:searchKey/:searchValue
localhost:3000/search/type/review

```js
{
	id: "123456789",
	type: "review",
	name: "Example post name",
	content: "Some cool content goes here.",
	author: "Alex",
	lastEdited: 123891476520689370 // milliseconds since JS dates are stored as that internally 
}
```
