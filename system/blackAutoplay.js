function blackAutoplay(whereA) {
	possiblePlaysTable = possiblePlays(whereA)
	blackPossiblePlays = []
	for(x=0;x<possiblePlaysTable.length;x++) {
		if(possiblePlaysTable[x][0][0] == "b") {
			blackPossiblePlays[blackPossiblePlays.length] = possiblePlaysTable[x].split('_')
		}
	}

	bestBlackPlay = blackPossiblePlays[parseInt(Math.random()*blackPossiblePlays.length)]
	for(x=0;x<blackPossiblePlays.length;x++) {
		if(blackPossiblePlays[x][3].slice(1) > bestBlackPlay[3].slice(1)) {
			bestBlackPlay = blackPossiblePlays[x]
		}
	}

	return bestBlackPlay.concat()
}

function testAutoplay(where) {

  	copyOfWhere = where.concat()
	bestBlack = blackAutoplay(copyOfWhere)

	copyOfWhere[bestBlack[2]] = copyOfWhere[bestBlack[1]]
	copyOfWhere[bestBlack[1]] = "x"

	//deplace(bestBlack[1], bestBlack[2])
	//actuSystem()

	bestWhite = whiteAutoplay(copyOfWhere)

	copyOfWhere[bestWhite[2]] = copyOfWhere[bestWhite[1]]
	copyOfWhere[bestWhite[1]] = "x"
	system = cocoSystem.concat()


	console.log(bestWhite)
	console.log(bestBlack)

	if(bestWhite[3].slice(1) <= bestBlack[3].slice(1)) {
		return bestBlack
	}

	else {
		newBestWhite = ["","","","a200"]
		newBestBlack = ["","","","a200"]

		possiblePlaysTable = possiblePlays(where)
		blackPossiblePlays = []
		for(x=0;x<possiblePlaysTable.length;x++) {
			if(possiblePlaysTable[x][0][0] == "b") {
				blackPossiblePlays[blackPossiblePlays.length] = possiblePlaysTable[x].split('_')
			}
		}
		for(x=0;x<blackPossiblePlays.length;x++) {
			copy2 = where.concat()
			copy2[blackPossiblePlays[x][2]] = blackPossiblePlays[x][1]
			copy2[blackPossiblePlays[x][1]] = "x"
			console.log(copy2)

			if(whiteAutoplay(copy2)[3].slice(1)<newBestWhite[3].slice(1)) {
				newBestWhite = whiteAutoplay(copy2)
				newBestBlack = blackPossiblePlays[x]
			}
		}
		return newBestBlack
	}
}

function blackAutoplayConfig() {
	if(bAutoplay == true) {
		bAutoplay = false
	}
	else {
		bAutoplay = true
	}  
}