

  
  const sharm = 'Шарм Аль Шейх';
  const hurgada = 'Хургада';
  const taba = 'Таба';
  
  let sharmPlaces = 15;
  let hurgadaPlaces = 25;
  let tabaPlaces = 6;

  
  

  //колво мест введённых пользователем
  let numberPlacesEnteredUser = Number(prompt('Введите колличество необходимы мест'));
  
  let freePlaces = (hurgadaPlaces - numberPlacesEnteredUser);
     
  

     if (numberPlacesEnteredUser >= 0 && Number.isInteger(numberPlacesEnteredUser)) {
       console.log('проверяем наличие необходимых мест в группах');
       if (numberPlacesEnteredUser <= tabaPlaces) {
        const noSeatsTaba = confirm(`Есть ${numberPlacesEnteredUser} мест в группе ${taba}, бронировать?`);
        
          if (noSeatsTaba) {
            remainingPlacesTaba = tabaPlaces - numberPlacesEnteredUser;
            console.log(`В ${taba} осталось ${remainingPlacesTaba} мест`);

            alert(`приятного отдыха в ${taba} `);
          }
        }
    
        if (numberPlacesEnteredUser <= sharmPlaces) {
          const noSeatsSharm = confirm(`Есть ${numberPlacesEnteredUser} мест в группе ${sharm}, бронировать?`);

          if (noSeatsSharm) {
            remainingPlacesSharm = sharmPlaces - numberPlacesEnteredUser;
            console.log(`В ${sharm} осталось ${remainingPlacesSharm} мест`);

            alert(`приятного отдыха в ${sharm} `);
           
          }
        }
    

        if (numberPlacesEnteredUser <=hurgadaPlaces) {
          const noSeatsHurgada = confirm(`Есть ${numberPlacesEnteredUser} мест в группе ${hurgada}, бронировать?`);

          if (noSeatsHurgada) {
            remainingPlacesHurgada = sharmPlaces - numberPlacesEnteredUser;
            console.log(`В ${hurgada} осталось ${remainingPlacesHurgada} мест`);

            alert(`приятного отдыха в ${hurgada}`);
           
          }
        }

      } else {
        alert('Ошибка ввода');
        }
        if (freePlaces = numberPlacesEnteredUser > 25) {
          const noSeats = confirm(`Извините, но ${numberPlacesEnteredUser} мест в группах нет`);
         console.log(noSeats);

      } 
     




     /*if (freePlaces = numberPlacesEnteredUser > 0 && numberPlacesEnteredUser <= tabaPlaces) {
      const numTaba = confirm(`Есть ${numberPlacesEnteredUser} мест в группе ${taba}`);
       console.log(numTaba);
      
       if (numberPlacesEnteredUser <= tabaPlaces) {
       const noSeatsTaba = tabaPlaces - numberPlacesEnteredUser;
       alert(noSeatsTaba);
       }


     } if (freePlaces = numberPlacesEnteredUser > 0 && numberPlacesEnteredUser <= sharmPlaces) {

      if (numberPlacesEnteredUser <= sharmPlaces) {
        const noSeatsTaba = sharmPlaces - numberPlacesEnteredUser;
        alert(noSeatsTaba);
        }

      const numSharm = confirm(`Есть ${numberPlacesEnteredUser} мест в группе ${sharm}`);
       console.log(numSharm);
     } if (freePlaces = numberPlacesEnteredUser > 0 && numberPlacesEnteredUser <= hurgadaPlaces) {

      if (numberPlacesEnteredUser <= hurgadaPlaces) {
        const noSeatsTaba = hurgadaPlaces - numberPlacesEnteredUser;
        alert(noSeatsTaba);
        }

      const numHurgada = confirm(`Есть ${numberPlacesEnteredUser} мест в группе ${hurgada}`);
        console.log(numHurgada);
     } else if (freePlaces = numberPlacesEnteredUser > 25) {
      const noSeats = confirm(`Извините, но ${numberPlacesEnteredUser} мест в группах нет`);
     console.log(noSeats);
     } else {
      alert('Ошибка ввода'); 
     }

     if (numberPlacesEnteredUser) {
       
     }*/
     
      


   