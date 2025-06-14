import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Feed = () => {
    //const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeTab, setActiveTab] = useState("all");
    const [showModal, setShowModal] = useState(false);
    const [selectedSport, setSelectedSport] = useState("all");
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");


    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        if (loggedIn !== "true") {
            navigate("/login");
        }
    }, []);

    const handleToggleFavorite = (id) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, isFavorite: !post.isFavorite } : post
        );

        setPosts(updatedPosts);

        const favoriteIds = updatedPosts
            .filter(post => post.isFavorite)
            .map(post => post.id);

        localStorage.setItem("favoritePosts", JSON.stringify(favoriteIds));
    };

    const fetchEvents = () => {
        const params = new URLSearchParams();
        if (selectedSport !== "all") params.append("sport", selectedSport);
        if (selectedDifficulty !== "all") params.append("difficulty", selectedDifficulty);

        const storedFavorites = JSON.parse(localStorage.getItem("favoritePosts")) || [];



        fetch(`${BASE_URL}/api/events?${params.toString()}`)

            .then(res => res.json())
            .then(data => {
                const updated = data.map(post => ({
                    ...post,
                    isFavorite: storedFavorites.includes(post.id)
                }));
                setPosts(updated);
            })
            .catch(err => console.error("Error al obtener eventos:", err));
    };

    useEffect(() => {
        fetchEvents();
    }, [selectedSport, selectedDifficulty]);

    const handleJoin = (id) => {
        const joinedEvents = JSON.parse(localStorage.getItem("joinedEvents")) || [];

        if (joinedEvents.includes(id)) {
            alert("Ya estás anotado en este evento.");
            return;
        }

        const updatedPosts = posts.map(post => {
            if (post.id === id) {
                if (post.participants < post.capacity) {
                    return { ...post, participants: post.participants + 1 };
                } else {
                    alert("Este evento ya alcanzó su capacidad máxima.");
                }
            }
            return post;
        });

        setPosts(updatedPosts);
        localStorage.setItem("joinedEvents", JSON.stringify([...joinedEvents, id]));
    };




    let filteredPosts = [...posts];

    if (activeTab === "favorites") {
        filteredPosts = filteredPosts.filter(post => post.isFavorite);
    }

    return (
        <div
            className="bg-light min-vh-100"
            style={{
                backgroundImage: `url("/opcionFeed.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            <Navbar />

            <div className="container mt-5 text-white">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="btn-group mb-4">
                        <button
                            className={`btn ${activeTab === "all" ? "btn-success" : "btn-outline-success"} text-black`}
                            onClick={() => setActiveTab("all")}
                        >
                            Todos
                        </button>
                        <button
                            className={`btn ${activeTab === "favorites" ? "btn-success" : "btn-outline-success"} text-black`}
                            onClick={() => setActiveTab("favorites")}
                        >
                            Favoritos ❤️
                        </button>

                        {/* Dropdown deporte */}
                        <div className="dropdown ms-2">
                            <button
                                className="btn btn-outline-success dropdown-toggle text-black"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                Deporte
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => setSelectedSport("all")}>Todos</button></li>
                                {["Escalada", "Running", "Ciclismo", "Fitness"].map((sport) => (
                                    <li key={sport}>
                                        <button className="dropdown-item" onClick={() => setSelectedSport(sport)}>
                                            {sport}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dropdown dificultad */}
                        <div className="dropdown ms-2">
                            <button
                                className="btn btn-outline-success dropdown-toggle text-black"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                Dificultad
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => setSelectedDifficulty("all")}>Todas</button></li>
                                {["Fácil", "Medio", "Difícil"].map((level) => (
                                    <li key={level}>
                                        <button className="dropdown-item" onClick={() => setSelectedDifficulty(level)}>
                                            {level}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {isLoggedIn && (
                        <button className="btn btn-light text-success" onClick={() => setShowModal(true)}>
                            Crear evento +
                        </button>
                    )}
                </div>

                <p className="text-white">
                    Mostrando {filteredPosts.length} evento(s)
                    {activeTab === "favorites" ? " favoritos ❤️" : ""}
                </p>

                {filteredPosts.length === 0 ? (
                    <p className="text-black">
                        No se encontraron eventos con los filtros seleccionados.
                    </p>

                ) : (
                    filteredPosts.map(post => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onToggleFavorite={() => handleToggleFavorite(post.id)}
                            onJoin={() => handleJoin(post.id)}
                        />
                    ))
                )}
            </div>

            {isLoggedIn && (
                <CreatePost
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    setPosts={setPosts}
                />
            )}
        </div>
    );
};

export default Feed;
