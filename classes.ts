class Vehicle {
  protected honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('zoom zoom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
