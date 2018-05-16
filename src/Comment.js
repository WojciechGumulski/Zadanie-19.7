import React from "react";

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, editComment, removeComment }) =>
	<li>
		{text} <span><i class="fas fa-thumbs-up"></i> {votes}</span> 
		<br></br>
		<button onClick={() => thumbUpComment(id)}><i class="far fa-plus-square"></i></button>
		<button onClick={() => thumbDownComment(id)}><i class="far fa-minus-square"></i></button>
		<button onClick={() => removeComment(id)}><i class="far fa-trash-alt"></i></button>
	</li>

export default Comment;