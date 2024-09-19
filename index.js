document.getElementById('btn').addEventListener('click',()=>{
    const input = document.getElementById('pass').value;
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()-_+=';
    

    let randomPassword = '';

    for(let i=0 ;i<input ;i++){
      const randomIndex =   Math.round(Math.random()*charSet.length);
      const randomChar =  charSet[randomIndex];
      randomPassword += randomChar;
      
     
    }
    document.getElementById('show').innerText = randomPassword;
})