import { useEffect, useState } from "react";
import { getPosts } from "../service/api";
import { Link } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            // Check LocalStorage first
            const localPosts = localStorage.getItem("blogPosts");

            if (localPosts) {
                setPosts(JSON.parse(localPosts));
            } else {
                // Fetch from API
                const data = await getPosts();

                setPosts(data);

                // Save in LocalStorage
                localStorage.setItem("blogPosts", JSON.stringify(data));
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const deletePost = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (!confirmDelete) return;

        const updatedPosts = posts.filter(
            (post) => Number(post.id) !== Number(id)
        );
        setPosts(updatedPosts);
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };

    if (loading) return <h2 className="loading-text-simple">Loading...</h2>;

    return (
        <div className="home-container-simple">
            <h1 className="home-title-simple">Blog App</h1>

            {posts.map((post) => (
                <div
                    key={post.id}
                    className="post-card-simple"
                >
                    <h6 className="post-id-simple">{post.id}</h6>
                    <h3 className="post-title-simple">{post.title}</h3>
                    <p className="post-body-simple">{post.body}</p>
                    <div className="post-actions-simple">
                        <button className="edit-button-simple">
                            <Link to={`/editpost/${post.id}`}>
                                Edit
                            </Link>
                        </button>
                        <button className="delete-button-simple" onClick={() => deletePost(post.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;