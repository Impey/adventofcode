async function GetData(){
    let file = await fetch('data.txt');
    
    return file.text();
}

async function calculate(){
    let f = await GetData();
    let data = f.split('\n');
    let frequencies = [];
    let count = 0;
    let total = 0;

    while(true){
        total += parseInt(data[count]);
        for(i = 0; i < frequencies.length; i++){
            if (total === frequencies[i]){
                return total;  
            }
        }
        frequencies.push(total);
        if(count === data.length){
            count = 0;
        }
        count++;
    }
}

async function main(){
    console.log(await calculate())
}

main();