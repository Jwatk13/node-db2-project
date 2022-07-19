const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if (!car) {
      next({ status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  next({ status: 400, message: `${req.body} is missing` })
}

const checkVinNumberValid = (req, res, next) => {
  next({ status: 400, message: `vin ${req.body.vin} is invalid` })
}

const checkVinNumberUnique = (req, res, next) => {
  next({ status: 400, message: `vin ${req.body.vin} already exists` })
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
