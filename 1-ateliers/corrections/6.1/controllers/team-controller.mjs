import { loadEnvFile } from "node:process";
import TeamRepository from "../models/repositories/team-repository.mjs";
import TeamModel from "../models/schemas/team-model.mjs";
import { connect } from "../models/connect.mjs";
loadEnvFile();
await connect();
const repo = new TeamRepository(TeamModel);
export const getDocumentation = (_, res) => {
  const { PORT } = process.env;
  const documentation = [
    {
      route: "GET /teams",
      description: "Teams list",
      path: `http://localhost:${PORT}/teams`,
    },
    {
      route: " GET /teams/:id",
      description: "One team",
      schema: {
        id: "number",
      },
      path: `http://localhost:${PORT}/teams/1`,
    },
    {
      route: "POST /teams",
      description: "Add a new team",
      schema: {
        type: "application/json",
        body: {
          name: "string",
          country: "string",
        },
      },
    },
    //...
  ];
  res.json({ routes: documentation, version: "2.0.0" });
};

export const findAll = async (_, res) => {
  repo
    .findAll()
    .then((teams) => {
      res.status(200).json(teams);
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Can't get teams" });
    });
};

export const findOne = (req, res) => {
  const { name } = req.params;
  repo
    .findOne(name)
    .then(team => {
      if (team) {
        res.status(200).json(team);
      } else {
        res.status(404).json({ message: "Team not found", success: false });
      }
    })
    .catch(() =>
      res
        .status(500)
        .json({ success: false, message: `Can't get a team with name ${name}` }),
    );
};

export const save = async (req, res) => {
  let team = req.team;
  const data = await repo.save(team);
  if (data._id)
    res.status(201).json({ message: "Team created", success: true, team });
  else {
    res.status(500).json({
      message:
        "Failed to insert new team, try again or contact-us please +33612345678",
      success: false,
    });
  }
};
