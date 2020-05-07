class Bullet{
    constructor (weight,speed) {
        this.x=50;
        this.y=200
        //this.sprite=createSprite(this.x,this.y,50,50);
        this.weight=random(30,52);
        this.speed=random(223,321);
        this.velocity=this.speed;
        this.color="white";
    }
}