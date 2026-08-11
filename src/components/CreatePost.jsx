import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!post.title || !post.body) {
            alert("Please fill all fields");
            return;
        }

        const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
        const newId =
            posts.length > 0
                ? Math.max(...posts.map((post) => post.id)) + 1
                : 1;
        const newPost = {
            id: newId,
            userId: 1,
            title: post.title,
            body: post.body,
        };

        const updatedPosts = [newPost, ...posts];

        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

        navigate("/");
    };

    return (
        <div className="form-container-simple">
            <form onSubmit={handleSubmit} className="form-card-simple">
                <h2 className="form-title-simple">Create Blog Post</h2>

                <input
                    type="text"
                    name="title"
                    className="form-input-simple"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                />

                <textarea
                    name="body"
                    className="form-textarea-simple"
                    value={post.body}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Enter blog content"
                />

                <button type="submit" className="form-button-simple">
                    Create Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;