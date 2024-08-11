
class uberprice{
    constructor(basefare,distancefareupto20km,distancefareafter20km,perminute){
        this.basefare=basefare
        this.distancefareupto20km=distancefareupto20km
        this.distancefareafter20km=distancefareafter20km
        this.perminute=perminute
        
    }

    pricecalculation(distance,time){
        let distancefare=0
        if(distance<=20){
            distancefare=distance*this.distancefareupto20km
        }else{
            distancefare=distance*this.distancefareafter20km
        }

        let timefare=time*this.perminute;
        let totalcost=this.basefare+distancefare+timefare
        return totalcost
    }
 
}
class ubergo extends uberprice{

    constructor(){
        super(60,12,18,2)
    }
}
        
class premier extends uberprice{
    constructor(){
        super(80,15,22,3)

    }
}
class uberxl extends uberprice{
    constructor(){
        super(100,20,25,4)

    }
}

class Auto extends uberprice{
    constructor(){
        super(40,10,15,1)

    }
}
class Gosedan extends uberprice{
    constructor(){
        super(70,14,20,2.5)

    }
}

let premierride=new premier()
let totalrideprice1=premierride.pricecalculation(10,15)
console.log(totalrideprice1);

let ubergoride=new ubergo();
let totalrideprice2=ubergoride.pricecalculation(10,15);
console.log(totalrideprice2);

let uberAuto=new Auto();
let totalrideprice3=uberAuto.pricecalculation(10,15);
console.log(totalrideprice3);

let uberXL=new uberxl();
let totalrideprice4=uberXL.pricecalculation(10,15);
console.log(totalrideprice4);

let uberGosedan=new Gosedan()
let totalrideprice5=uberGosedan.pricecalculation(10,15)
console.log(totalrideprice5);
