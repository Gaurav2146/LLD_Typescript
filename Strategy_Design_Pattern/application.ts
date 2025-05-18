abstract class Vehicle
{
   private drivestrategy: DriveStrategy;

   constructor(drivestrategy:DriveStrategy)
   {
     this.drivestrategy = drivestrategy;
   }

   drive()
   {
    this.drivestrategy.drive();
   }
}

class SportsVehicle extends Vehicle
{
  constructor()
  {
    super(new SportsDriveStrategy())
  }
}

class PassengerVehicle extends Vehicle
{
   constructor()
   {
    super(new PassangerDriveStattegy())
   }
}

class OffroadVehicle extends Vehicle
{
    constructor()
    {
     super(new OffroadDriveStategy())
    }
}


interface DriveStrategy{
  drive():void;
}

class SportsDriveStrategy implements DriveStrategy
{
    drive()
    {
        console.log("Sports Drive Strategy")
    }
}

class OffroadDriveStategy implements DriveStrategy
{
    drive()
    {
        console.log("Offroad Drive Stategy")
    }
}

class PassangerDriveStattegy implements DriveStrategy
{
    drive()
    {
        console.log("Passanger Drive Stattegy")
    }
}

export {
    SportsVehicle,
    PassengerVehicle,
    OffroadVehicle
}