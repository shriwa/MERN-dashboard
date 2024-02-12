const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect(
  "mongodb+srv://shriwa:12345@cluster0.eyzr5nq.mongodb.net/?retryWrites=true&w=majority",
  console.log("Successfully connected to MongoDB")
);

// Schema for details
const Details = mongoose.model("Details", {
  _id: Number,
  coaching: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  how_long: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  competition: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  nationality: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  club: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  age: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  fitness: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  play_activity: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  skill_level: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },

  other_sports: {
    option_1: {
      type: String,
      required: true,
    },
    option_2: {
      type: String,
      required: true,
    },
    option_3: {
      type: String,
      required: true,
    },
  },
});

// POST for dropdown details
app.post("/adddetails", async (req, res) => {
  try {
    const {
      _id,
      coaching,
      how_long,
      competition,
      nationality,
      club,
      age,
      fitness,
      play_activity,
      skill_level,
      other_sports,
    } = req.body;
    const details = new Details({
      _id,
      coaching,
      how_long,
      competition,
      nationality,
      club,
      age,
      fitness,
      play_activity,
      skill_level,
      other_sports,
    });
    await details.save();
    res.status(201).send("Details added successfully");
  } catch (error) {
    console.error("Error adding details:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get for  details
app.get("/getdetails/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const details = await Details.findById(id);
    if (!details) {
      return res.status(404).send("Details not found");
    }
    res.json(details);
  } catch (error) {
    console.error("Error retrieving details:", error);
    res.status(500).send("Internal Server Error");
  }
});

//Schema fro match data
const Match_data = mongoose.model("Match_data", {
  match: {
    _id: Number,
    date: {
      type: String,
      required: true,
    },
    opponent: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
  },
});

// GET for match details
app.get("/getmatch/all", async (req, res) => {
  try {
    const matchData = await Match_data.find();
    if (!matchData) {
      return res.status(404).send("Details not found");
    }
    const matches = matchData.map((item) => item.match);
    res.json(matches);
  } catch (error) {
    console.error("Error retrieving details:", error);
    res.status(500).send("Internal Server Error");
  }
});

// POST for match details
app.post("/addmatch", async (req, res) => {
  try {
    const { match } = req.body;
    const match_data = new Match_data({
      match,
    });
    await match_data.save();
    res.status(201).send("Details added successfully");
  } catch (error) {
    console.error("Error adding details:", error);
    res.status(500).send("Internal Server Error");
  }
});

const port = 2000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
