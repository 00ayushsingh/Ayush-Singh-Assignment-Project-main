const rides = require('../data/rides.json');

exports.listRides = (req, res) => {
  res.json(rides);
};

exports.getRideDetails = (req, res) => {
  const rideId = req.params.id;
  const ride = rides.find((r) => r.id === rideId);

  if (!ride) {
    return res.status(404).json({ message: 'Ride not found' });
  }

  res.json(ride);
};
