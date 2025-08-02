'use strict';

const { fillTank } = require('./fillTank');

describe('fillTank', () => {
  let customer;

  beforeEach(() => {
    customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };
  });

  it('should fill tank to full when amount is not provided', () => {
    fillTank(customer, 50);
    expect(customer.vehicle.fuelRemains).toBeGreaterThan(8);
  });
});
