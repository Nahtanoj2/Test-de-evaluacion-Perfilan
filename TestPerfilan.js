// Test Para Jonathan Leyva de la Vega
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var i,j;
	var character;
	var counterArray = Array();
	var max;
	var maxAux;
	var MaxChar;
	for( i = 0 ; i < str.length ; i++)
	{
		character = str[i];
		counterArray[i] = 0; 

		for( j = 0; j < str.length ; j++){
			if(character == str[j])
			{
				counterArray[i] = counterArray[i] + 1;
			}


		}
		max = Math.max.apply(null, counterArray);
		if(maxAux !== max)
		{
			MaxChar = character;
		}
		maxAux = max;

	}
	return MaxChar;
}