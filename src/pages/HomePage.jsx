import EntryForm from "../components/EntryForm";
import LatestXPosts from "../components/LatestXPosts";

export default function HomePage(){

	return(
		<>
			<h1>Journal Home Page</h1>
			{/* New post form: */}
			<EntryForm />

			{/* Latest X amount of posts: */}
			<LatestXPosts limit={3} />
		</>
	);
}