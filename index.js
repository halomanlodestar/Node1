/** @format */

const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/movies/:child", async (req, res) => {
	const { child } = req.params ? req.params : "";
	let dir = `${__dirname}\\movies\\${child}`;
	let data;
	try {
		data = fs.readdirSync(dir);
		res.json({
			childDirs: data,
			currentDir: dir,
		});
	} catch (e) {
		res.sendStatus(404);
	}

	// res.send(dir);
});

app.get("/movies/", async (req, res) => {
	const { child } = req.params ? req.params : "";
	let dir = `${__dirname}\\movies`;
	let data = fs.readdirSync(dir);
	res.json({
		childDirs: data,
		currentDir: dir,
	});
	// res.send(dir);
});

app.listen(3000);

// https://fancy-glitter-0eb0.yofareh761.workers.dev/e8aac9ac9d5452672d0d61a163bcc3f5/driveseed.org/Peaky.Blinders.S05E05.720p.English.Esubs.MoviesmodPro.in.mkv
