/*  Write a “person” class to hold all the details*/


class person{
    constructor(firstname,lastname,age,phoneno,address){
        this.firstname=firstname
        this.lastname=lastname
       this.phoneno=phoneno
        this.age=age
        this.address=address
    }

    getFulname(){
        return `${this.firstname} ${this.lastname}`
        
    }

    updateAddress(NewAddress){
        this.address=NewAddress;
      }  


      updateage(newage){
        this.age=newage
      }

      updatephoneno(Newnumber){
        this.phoneno=Newnumber

      }

    displaydetails(){
        console.log(`Name:${this.getFulname()}`);
        console.log(`Phoneno:${this.phoneno}`);
        console.log(`Age:${this.age}`);
        console.log(`address:${this.address}`);

  
        
    }
}


let person1=new person(`Ram`,`Krishna`,50,9997775550,`1st avenue`)

person1.displaydetails()
console.log(`\n`);

person1.updateAddress(`2nd avenue`)
person1.updateage(55)
person1.updatephoneno(7779995550)
person1.displaydetails()


