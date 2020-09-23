const
	express = require("express"),
	router = express.Router(),
	SSE = require("express-sse"),
	mongo = require("mongodb"),
	MongoClient = mongo.MongoClient,
	mongo_uri = require("../../keys/mongokey");

const mongoClient = MongoClient.connect(mongo_uri, {useNewUrlParser: true,useUnifiedTopology: true}).then(db => db.db("music"));
const castDevices = [];

// Protected SSE
const castSSE = new SSE();

// Add User ID Session
router.get("/user/connect", (req, res) => {
	const
		userId = req.query.user_id,
		deviceId = req.query.device_id;

	const currentSession = castDevices.find(m => m.userId === userId);
	if (!currentSession) castDevices.push({
		userId: userId,
		castDevices: [deviceId]
	});
	else currentSession.castDevices.filter(value => value === deviceId).push(deviceId);
	castSSE.init(req, res);
	return castSSE.send(currentSession, `deviceListUpdate-${userId}`);
});
// Update User Object
router.post("/user/devices/update", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = req.headers.userdata;

	const currentSession = castDevices.find(session => session.userId === userId);
	if (currentSession.castDevices.findIndex(m => m === deviceId) === -1) currentSession.castDevices.push(deviceId);

	castDevices.filter(value => value.userId === userId).push(currentSession);
	castSSE.send(currentSession || castDevices.find(value => value.userId === userId), `deviceListUpdate-${userId}`);
	res.json(currentSession);
});

// Remove User Device Object
router.post("/user/devices/unregister", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		userId = JSON.parse(req.headers.userdata).user_id;

	castDevices.map(session => session.userId === userId ? session.castDevices.filter(deviceId => deviceId === deviceId) : null);
	castSSE.send({...castDevices.find(session => session.userId === userId)}, `unregister-${deviceId}`); // , `unregister-${deviceId}`
});

// Send Data to Other Device
router.post("/user/devices/send", (req, res) => {
	const
		deviceId = req.headers.deviceid,
		remoteDeviceId = req.headers.remotedeviceid,
		userId = JSON.parse(req.headers.userdata).user_id,
		videoElement = JSON.parse(req.headers.videoelement);
	const castSession = castDevices.find(session => session.userId === userId);
	if (castSession.castDevices.includes(deviceId)){
		castSSE.send({
			userId: userId,
			deviceId: deviceId,
			video: videoElement,
			remoteDeviceId: remoteDeviceId,
		}, `devicePlay-${userId}-${remoteDeviceId}`);
	}
	res.json({
		userId: userId,
		deviceId: deviceId,
		video: videoElement,
		remoteDeviceId: remoteDeviceId,
	});
});

// Get Devices TODO Hide in Production
router.get("/user/devices/all", (req, res) => {
	res.json(castDevices);
});

module.exports = router;
//    console.log(castDevices.map(session => session.userId === userId ? session.castDevices[deviceId] === null ? session.castDevices.push(deviceId) : null : null));
