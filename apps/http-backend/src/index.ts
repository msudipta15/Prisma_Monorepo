import express from "express";
import { prismaClient } from "@repo/db/client";
const app = express();

app.use(express.json());
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    await prismaClient.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    res.json({ msg: "done" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001);
