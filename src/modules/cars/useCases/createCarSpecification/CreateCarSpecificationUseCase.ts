import { inject, injectable } from "tsyringe";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";
import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,

    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exists!");
    }

    const specifications = await this.specificationsRepository.findByIds(specifications_id);
    
    carExists.specifications = specifications;

    const carDTO: ICreateCarDTO = {
      name: carExists.name ?? '',
      description: carExists.description ?? '',
      daily_rate: carExists.daily_rate ?? 0, 
      license_plate: carExists.license_plate ?? '', 
      fine_amount: carExists.fine_amount ?? 0,
      brand: carExists.brand ?? '', 
      category_id: carExists.category_id ?? '', 
      specifications: specifications, 
    };

    await this.carsRepository.create(carDTO);

    return carExists;
  }
}

export { CreateCarSpecificationUseCase };
