import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Austria",
        city: "Vienna",
        salary: "€2000/month",
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "Creative Studio",
        city: "Salzburg",
        salary: "€1800/month",
    },
];

app.get("/", (req, res) => {
    res.send("StudentHire Backend Running");
});

app.get("/api/jobs", (req, res) => {
    res.json(jobs);
});

app.post("/api/login", (req, res) => {
    const { email } = req.body;

    res.json({
        success: true,
        user: {
            name: "Ehtasham",
            email,
        },
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});