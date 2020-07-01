class Singleton {

	static getInstance() {

		if (global.singletons == undefined) {
			global.singletons = {}
		}

		if (global.singletons[this.name] == undefined) {
			
			global.singletons[this.name] = new this()
			return global.singletons[this.name]
		}
		return global.singletons[this.name]

	}

}

module.exports = Singleton