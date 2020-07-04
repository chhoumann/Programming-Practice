function highAndLow(numbers){
    let high=-1e9,low=1e9;
    (numbers.split(' ')).forEach(n => {
        n = parseInt(n);
        if (n<low) low = n;
        if (n>high) high = n;
    });
    return `${high} ${low}`
  }