import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

        const selectedPost = posts.find((p) => p.id === Number(id));

        if (selectedPost) {
            setPost(selectedPost);
        }
    }, [id]);

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

        const updatedPosts = posts.map((p) =>
            p.id === Number(id) ? post : p
        );

        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

        navigate("/");
    };

    return (
        <div className="form-container-simple">
            <form onSubmit={handleSubmit} className="form-card-simple">
                <h2 className="form-title-simple">Edit Post</h2>

                <input
                    type="text"
                    name="title"
                    className="form-input-simple"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <textarea
                    name="body"
                    rows="5"
                    className="form-textarea-simple"
                    value={post.body}
                    onChange={handleChange}
                    placeholder="Content"
                />

                <button type="submit" className="form-button-simple">Update</button>
            </form>
        </div>
    );
}

export default EditPost;