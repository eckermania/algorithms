function solution(N, S) {
    if(!N)
    {
      console.log('Number of rows missing!')
    }

    //Create array to provide for easy index look up of seat letter
    let seatLetterMap = [['A', 'B', 'C'], ['D', 'E', 'F', 'G'], ['H', 'J', 'K']];
    
    //Create a 3D array to hold reservations - 0 = seat is empty
    let reservedSeatMap = []
    
    for (let i = 0; i < N; i++)
    {
        reservedSeatMap.push([[0, 0, 0], [0, 0, 0, 0], [0, 0, 0]])
    }
   
    //Populate map of reserved and available seats from input
    let reservedSeats = S.split(' ')
    
    reservedSeats.forEach((seat) =>
    {
        let seatLetter = seat.charAt(seat.length-1);
        let seatLocationinRow = findLetterIndex(seatLetter);
        let row = parseInt(seat.substring(0, seat.length-1))-1;

        reservedSeatMap[row][seatLocationinRow[1]][seatLocationinRow[0]] = 1;

    })

    //Increment count of number of families every time 3 seats are found in the same sub-sub-array
    let numOfFamilies = 0;

    for(let i=0; i<reservedSeatMap.length; i++) 
    {
      if(reservedSeatMap[i][0].indexOf(1)<0) numOfFamilies++;
      if(reservedSeatMap[i][2].indexOf(1)<0) numOfFamilies++;
      
      if(reservedSeatMap[i][1].indexOf(1)<0 | (reservedSeatMap[i][1].indexOf(1) == reservedSeatMap[i][1].lastIndexOf(1)))
      {
        numOfFamilies++
      }
    }

    return numOfFamilies;

    //Return an array with two indices showing the location of a letter in a row
    function findLetterIndex(seatLetter)
    { 
      for (let i = 0; i < seatLetterMap.length; i++)
      {
        let tmpIndex = [seatLetterMap[i].indexOf(seatLetter)];

        if(tmpIndex >= 0)
        {
          tmpIndex.push(i);

          return tmpIndex
        }
      }
    }
}

solution(50, '1A 3C 2B 40G 5A')