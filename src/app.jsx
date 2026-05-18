import { useState } from "react";
import "./index.css";

const jobData = [
    {
        id: 1,
        title: "UI/UX Designer",
        company: "Creative Studio Austria",
        city: "Salzburg",
        type: "Part Time",
        category: "Design",
        hours: "20 hours/week",
        salary: "€15 - €18/hour",
        posted: "2 days ago",
        description:
            "We are looking for a creative UI/UX Designer to design clean website and mobile app interfaces using Figma.",
        requirements: [
            "Basic knowledge of Figma",
            "Good eye for design",
            "Interest in UI/UX",
        ],
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "Tech Austria Labs",
        city: "Vienna",
        type: "Internship",
        category: "IT",
        hours: "25 hours/week",
        salary: "€1,200/month",
        posted: "1 week ago",
        description:
            "Join our frontend team and build modern React applications.",
        requirements: [
            "Basic React knowledge",
            "HTML, CSS, JavaScript",
            "Git and GitHub basics",
        ],
    },
];

function App() {
    const [keyword, setKeyword] = useState("");
    const [city, setCity] = useState("");
    const [language, setLanguage] = useState("EN");
    const [selectedJob, setSelectedJob] = useState(null);
    const [savedJobs, setSavedJobs] = useState([]);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [page, setPage] = useState("home");
    const [userName, setUserName] = useState("");

    const filteredJobs = jobData.filter(
        (job) =>
            job.title.toLowerCase().includes(keyword.toLowerCase()) &&
            job.city.toLowerCase().includes(city.toLowerCase())
    );

    function saveJob(id) {
        if (savedJobs.includes(id)) {
            setSavedJobs(savedJobs.filter((jobId) => jobId !== id));
        } else {
            setSavedJobs([...savedJobs, id]);
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        setUserName("Ehtasham");
        setPage("home");
        setShowProfileMenu(false);
    }

    // LOGIN PAGE
    if (page === "login") {
        return (
            <div className="login-page">
                <div className="login-card">

                    <h1>🎓 StudentHire Austria</h1>

                    <h2>Sign in</h2>

                    <p>
                        Stay updated on the latest student jobs in Austria.
                    </p>

                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email or phone"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />

                        <a href="#">Forgot password?</a>

                        <button
                            className="login-main-btn"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </form>

                    <div className="divider">or</div>

                    <button
                        onClick={handleLogin}
                        className="google-btn social-btn"
                    >
                        Continue with Google
                    </button>

                    <button
                        onClick={handleLogin}
                        className="apple-btn social-btn"
                    >
                        Continue with Apple
                    </button>

                    <div className="join-text">
                        <p>
                            New to StudentHire? <span>Join now</span>
                        </p>
                    </div>

                    <button
                        className="back-btn"
                        onClick={() => setPage("home")}
                    >
                        Back to jobs
                    </button>

                </div>
            </div>
        );
    }

    // JOB DETAIL PAGE
    if (selectedJob) {
        return (
            <div className="app">
                <header>
                    <h1>🎓 StudentHire Austria</h1>

                    <button onClick={() => setSelectedJob(null)}>
                        Back to Jobs
                    </button>
                </header>

                <main className="job-detail">
                    <div className="detail-card">

                        <p className="badge">
                            {selectedJob.type}
                        </p>

                        <h1>{selectedJob.title}</h1>

                        <h2>{selectedJob.company}</h2>

                        <p className="meta">
                            📍 {selectedJob.city} • ⏱{" "}
                            {selectedJob.hours} • 💰{" "}
                            {selectedJob.salary}
                        </p>

                        <div className="detail-actions">

                            <button className="apply-btn">
                                Apply Now
                            </button>

                            <button
                                onClick={() => saveJob(selectedJob.id)}
                            >
                                {savedJobs.includes(selectedJob.id)
                                    ? "Saved"
                                    : "Save Job"}
                            </button>

                        </div>

                        <section>
                            <h3>Job Description</h3>
                            <p>{selectedJob.description}</p>
                        </section>

                        <section>
                            <h3>Requirements</h3>

                            <ul>
                                {selectedJob.requirements.map(
                                    (item, index) => (
                                        <li key={index}>
                                            ✅ {item}
                                        </li>
                                    )
                                )}
                            </ul>

                        </section>

                    </div>
                </main>
            </div>
        );
    }

    // HOME PAGE
    return (
        <div className="app">

            <header className="modern-header">

                <div className="header-left">

                    <h1>🎓 StudentHire Austria</h1>

                    <input
                        className="header-search"
                        placeholder="Search jobs, companies..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                    />

                </div>

                <div className="header-right">

                    <button className="nav-btn">
                        Home
                    </button>

                    <button className="nav-btn">
                        Jobs
                    </button>

                    <button className="nav-btn">
                        Messages
                    </button>

                    <button
                        onClick={() =>
                            setLanguage(
                                language === "EN"
                                    ? "DE"
                                    : "EN"
                            )
                        }
                    >
                        {language}
                    </button>

                    <button
                        className="profile-btn"
                        onClick={() =>
                            setShowProfileMenu(
                                !showProfileMenu
                            )
                        }
                    >
                        {userName
                            ? `👤 ${userName}`
                            : "👤 Profile"}
                    </button>

                    {showProfileMenu && (
                        <div className="profile-menu">

                            <h3>
                                {userName
                                    ? "Your Profile"
                                    : "Create Your Profile"}
                            </h3>

                            <p>
                                {userName
                                    ? "You are signed in successfully."
                                    : "Login or sign up to apply faster."}
                            </p>

                            {!userName && (
                                <>

                                    <button
                                        onClick={() =>
                                            setPage("login")
                                        }
                                    >
                                        Login
                                    </button>

                                    <button
                                        onClick={() =>
                                            setPage("login")
                                        }
                                    >
                                        Sign Up
                                    </button>

                                    <button
                                        className="google-btn"
                                        onClick={() =>
                                            setPage("login")
                                        }
                                    >
                                        Continue with Google
                                    </button>

                                    <button
                                        className="apple-btn"
                                        onClick={() =>
                                            setPage("login")
                                        }
                                    >
                                        Continue with Apple
                                    </button>

                                </>
                            )}

                            {userName && (
                                <button
                                    onClick={() =>
                                        setUserName("")
                                    }
                                >
                                    Logout
                                </button>
                            )}

                        </div>
                    )}

                </div>
            </header>

            <section className="hero">

                <h2>
                    Find Student Jobs in Austria
                </h2>

                <p>
                    Search part-time, internship and
                    full-time jobs easily.
                </p>

                <div className="search-box">

                    <input
                        placeholder="Keyword"
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                    />

                    <input
                        placeholder="City in Austria"
                        value={city}
                        onChange={(e) =>
                            setCity(e.target.value)
                        }
                    />

                    <select>
                        <option>All Categories</option>
                        <option>Design</option>
                        <option>IT</option>
                        <option>Marketing</option>
                    </select>

                </div>

            </section>

            <section className="content">

                <aside className="profile-box">

                    <h3>Create Your Profile</h3>

                    <p>
                        Apply faster by creating a
                        student profile.
                    </p>

                    <button
                        onClick={() => setPage("login")}
                        className="google-btn"
                    >
                        Continue with Google
                    </button>

                    <button
                        onClick={() => setPage("login")}
                        className="apple-btn"
                    >
                        Continue with Apple
                    </button>

                </aside>

                <section className="jobs">

                    <h2>Recommended Jobs</h2>

                    {filteredJobs.map((job) => (
                        <div
                            className="job-card"
                            key={job.id}
                        >

                            <div>

                                <p className="badge">
                                    {job.type}
                                </p>

                                <h3>{job.title}</h3>

                                <p className="company">
                                    {job.company}
                                </p>

                                <p className="meta">
                                    📍 {job.city} •{" "}
                                    {job.hours} •{" "}
                                    {job.salary}
                                </p>

                                <p>
                                    {job.description.slice(
                                        0,
                                        120
                                    )}
                                    ...
                                </p>

                            </div>

                            <div className="card-actions">

                                <button
                                    onClick={() =>
                                        setSelectedJob(job)
                                    }
                                >
                                    View Details
                                </button>

                                <button
                                    onClick={() =>
                                        saveJob(job.id)
                                    }
                                >
                                    {savedJobs.includes(job.id)
                                        ? "Saved"
                                        : "Save"}
                                </button>

                            </div>

                        </div>
                    ))}

                </section>

            </section>

        </div>
    );
}

export default App;