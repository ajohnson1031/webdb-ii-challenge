const express = require("express");
const validate = require("../middleware");

const router = express.Router();

const db = require("../data/db-config.js");

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");

    cars.length
      ? res.json(cars)
      : res.status(404).json({ message: "All the cars have been sold" });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const car = await db("cars").where({ id });

    car.length
      ? res.json(car)
      : res.status(404).json({ message: "No car exists with that ID" });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.post("/", validate, async (req, res) => {
  const newCar = req.body;
  console.log(req.body);
  try {
    const carEntry = await db("cars").insert(newCar);
    carEntry.length
      ? res.json(carEntry)
      : res.status(400).json({ message: "This car could not be added." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const carUpdate = await db("cars")
      .update(changes)
      .where({ id });

    carUpdate
      ? res.json(carUpdate)
      : res.status(400).json({
          message: "No updates could be made with the supplied information."
        });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const carDelete = await db("cars")
      .where({ id })
      .del();

    carDelete
      ? res.json({ message: "Requested car has been deleted." })
      : res
          .status(400)
          .json({ message: "No car with that ID exists. Please try another." });
  } catch (error) {
    res.status(500).json({ error: "db error: ", error });
  }
});

module.exports = router;
