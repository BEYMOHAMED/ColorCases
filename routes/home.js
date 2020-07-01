let { models } = require('./../database').getInstance();

module.exports = (app) => {

	app.get('/', (req, res) => {
		models['Square'].findAll({
			order: [['id', 'DESC']]
		}).then((squares) => {
			if (squares.length == 0) {
				for (let i = 1; i < 103; i++) {
					models['Square'].create({
					square_color: '#fff'
					}).then((squares) => {
						res.render('index', {squares: squares})
					})
				}
				res.render('home', {squares: squares})
			} else {
				res.render('index', {squares: squares})
			}
        })
	})
	
	app.put('/:id(\\d+)/', (req, res) => {
		models['Square'].findOne({
			where: {
				id: req.body.id
			}
		}).then((square) => {
			square.update({square_color: req.body.color})
			res.send({status:200})
        })
	})
}