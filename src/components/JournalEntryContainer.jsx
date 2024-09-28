import { useEffect, useState } from "react";
import { useJournalEntriesData } from "../contexts/EntriesContext";
import EntryForm from "./EntryForm";
import ViewEntry from "./ViewEntry";


export default function JournalEntryContainer({entryId}){

	let [isEditing, setIsEditing] = useState(false);
	let journalEntriesData = useJournalEntriesData();

	let [currentJournalEntry, setCurrentJournalEntry] = useState({});

	useEffect(() => {
		// On componentDidMount, retrieve journal entry with id of {entryId}
		// from {journalEntriesData}
		// and set that into {currentJournalEntry}
		let currentEntry = journalEntriesData.find((entry) => entry.id == entryId);
		setCurrentJournalEntry(currentEntry);
	}, [journalEntriesData]);




	if (isEditing){
		return <>
			<EntryForm entryId={currentJournalEntry.id} />
			<button onClick={() => setIsEditing(false)}>
				Finish Editing
			</button>
		</>
	} else {
		return <>
			<ViewEntry journalEntry={currentJournalEntry} />
			<button onClick={() => setIsEditing(true)}>
				Start Editing
			</button>
		</>
	}

	// return(
	// 	<>
	// 		{isEditing ? 
	// 		<EntryForm entryId={currentJournalEntry.id} />
	// 		:
	// 		<ViewEntry entryId={currentJournalEntry.id} />
	// 		}
	// 		<button onClick={() => setIsEditing(!isEditing)}>
	// 			Toggle Editing
	// 		</button>
	// 	</>
	// )
}