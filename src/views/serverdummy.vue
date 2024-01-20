const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const path = require("path");

const uploadsDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

let uploadedFiles = [];

// Set up multer for file uploading
const uploadStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure the 'uploads/' directory exists
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: uploadStorage });

// ... (rest of your mock data and routes)

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Store file information
  uploadedFiles.push({
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size,
    // Add other file properties you need
  });

  res
    .status(201)
    .send({ message: "File uploaded successfully", file: req.file });
});
app.get("/upload", (req, res) => {
  res.status(200).json(uploadedFiles);
});


// Revert upload route (optional)
app.post("/revert", (req, res) => {
  // Logic to delete the last uploaded file
  res.send({ message: "File reverted successfully" });
});
// Mock data (replace this with your actual data)
let badgeRequests = [];

let requesters = [
  // ... (other requester entries)
];
// Mock data (replace this with your actual data)
let ptwData = [];

// Routes
app.get("/ptw", (req, res) => {
  res.json(ptwData);
});

app.post("/ptw", (req, res) => {
  const newPTW = req.body;
  newPTW.id = ptwData.length + 1;
  ptwData.push(newPTW);

  res.status(201).json(newPTW);
});

app.get("/ptw/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const ptw = ptwData.find((ptw) => ptw.id === id);

  if (ptw) {
    res.json(ptw);
  } else {
    res.status(404).json({ error: "PTW not found" });
  }
});

app.put("/ptw/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPTW = req.body;
  const index = ptwData.findIndex((ptw) => ptw.id === id);

  if (index !== -1) {
    ptwData[index] = { ...ptwData[index], ...updatedPTW };
    res.json(ptwData[index]);
  } else {
    res.status(404).json({ error: "PTW not found" });
  }
});

app.delete("/ptw/:id", (req, res) => {
  const id = parseInt(req.params.id);
  ptwData = ptwData.filter((ptw) => ptw.id !== id);

  res.json({ message: "PTW deleted successfully" });
});
// Routes
app.get("/badgeRequests", (req, res) => {
  res.json(badgeRequests);
});
app.get("/requesters", (req, res) => {
  res.json(requesters);
});
app.post("/requesters", (req, res) => {
  const newRequester = req.body;
  newRequester.id = requesters.length + 1;
  requesters.push(newRequester);

  res.status(201).json(newRequester);
});

app.post("/badgeRequests", upload.any(), (req, res) => {
  const newBadgeRequest = req.body;
  newBadgeRequest.id = badgeRequests.length + 1;
  // Handle files if they exist
  if (req.files) {
    newBadgeRequest.files = req.files.map((file) => file.originalname);
  }
  badgeRequests.push(newBadgeRequest);
  res.status(201).json(newBadgeRequest);
});

app.get("/badgeRequests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const badgeRequest = badgeRequests.find((request) => request.id === id);

  if (badgeRequest) {
    res.json(badgeRequest);
  } else {
    res.status(404).json({ error: "Badge request not found" });
  }
});

app.put("/badgeRequests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBadgeRequest = req.body;
  const index = badgeRequests.findIndex((request) => request.id === id);

  if (index !== -1) {
    badgeRequests[index] = { ...badgeRequests[index], ...updatedBadgeRequest };
    res.json(badgeRequests[index]);
  } else {
    res.status(404).json({ error: "Badge request not found" });
  }
});

app.delete("/badgeRequests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  badgeRequests = badgeRequests.filter((request) => request.id !== id);

  res.json({ message: "Badge request deleted successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
