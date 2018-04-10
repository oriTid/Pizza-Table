export function rand(min:number, max:number):number{

    if (min>max){

        let newMin:number = min;
        min=max;
        max=newMin;
    }

    return Math.round(Math.random()*(max-min) + min);
}