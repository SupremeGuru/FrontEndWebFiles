let day = prompt('Please Enter A Day >>>>>  ');

switch (day) {
    case 'sunday':
        console.log('Go to church');
        break;
    case 'monday':
        console.log('Go to work');    
        break;
    case 'tuesday':
        console.log('stay at home');
        break;     
    case 'wednesday':
        console.log('watch UCL');      
        break;     
    case 'thursday':
        console.log('watch UEL');     
        break;     
    case 'friday':
        console.log('Go to Mosque');      
        break;     
    case 'saturday':
        console.log('Go to party');    
        break;
    default:
        console.log('Please Enter a Day');
        break;
}

chr = prompt('Enter a Character')

switch (chr) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
     console.log('Your Character is vowel');   
        break;

    default:
      console.log('Yur character is not vowel')
        break;
}