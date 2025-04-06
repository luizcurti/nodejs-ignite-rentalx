import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cars_image")
class CarImage {
  @PrimaryColumn()
  id: string = uuidV4();

  @Column()
  car_id: string | undefined;

  @Column()
  image_name: string | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor() {
  }
}

export { CarImage };
