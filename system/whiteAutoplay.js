function whiteAutoplay(whereA) {
	possiblePlaysTable = possiblePlays(whereA)
	whitePossiblePlays = []
	for(x=0;x<possiblePlaysTable.length;x++) {
		if(possiblePlaysTable[x][0][0] == "b") {
			whitePossiblePlays[whitePossiblePlays.length] = possiblePlaysTable[x].split('_')
		}
	}

	bestWhitePlay = whitePossiblePlays[parseInt(Math.random()*whitePossiblePlays.length)]
	for(x=0;x<whitePossiblePlays.length;x++) {
		if(whitePossiblePlays[x][3].slice(1) > bestWhitePlay[3].slice(1)) {
			bestWhitePlay = whitePossiblePlays[x]
		}
	}

	return bestWhitePlay.concat()
}