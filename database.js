const fs = require('fs'), 
    Sequelize = require('sequelize'),
    Singleton = require('./singleton')

class Database extends Singleton {

    constructor() {
        super()

        this.sequelize = new Sequelize('colors', 'postgres', 'root', {
            host: 'localhost',
            port: 5432,
            dialect: 'postgres',
            logging: false,

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            define: {
                underscored: true
            }
        })

        this.models = {}

        var files = fs.readdirSync(__dirname + '/models/')

        for (var i in files) {
            var file = files[i].replace('.js', '')
            this.models[file] = require(__dirname + '/models/' + file)(this.sequelize, Sequelize, this.models)
        }


        // this.models['User'].hasMany(this.models['UserLastLogin'])
        // this.models['UserLastLogin'].belongsTo(this.models['User'])

        

        this.sequelize.sync()

    }

}

module.exports = Database