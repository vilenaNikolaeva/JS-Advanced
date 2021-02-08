function solve(){

    class Balloons{
        constructor(color,gasWeight){
            this.color=color,
            this.gasWeight=gasWeight;
        }
    }

    class PartyBalloon extends BAlloons{
        constructor(color,gasWeight,ribbonColor,ribbonLenght){
            super(color,gasWeight);
            this.ribbonColor=ribbonColor; 
            this.ribbonLenght=ribbonLenght;
            this.ribbon={
                color:ribbonColor,
                lenght: ribbonLenght
            };
        }
        get ribbon(){
            return this.ribbon;
        }
    }

    class BirthdayBallon extends PartyBalloon{
        constructor(color,gasWeight,ribbonColor,ribbonLenght,text){
            super(color,gasWeight,ribbonColor,ribbonLenght);
                this.text=text;
        }
        get text(){
            return this.text;
        }
    }

    return{
        Balloons: Balloons,
        PartyBalloon: PartyBalloon,
        BirthdayBallon:BirthdayBallon
    }
}