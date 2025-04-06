import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";

@Entity("rentals")
class Rental {
  @PrimaryColumn()
  id: string = uuidV4();

  @ManyToOne(() => Car)
  @JoinColumn({ name: "car_id" })
  car: Car | undefined;

  @Column()
  car_id: string | undefined;

  @Column()
  user_id: string | undefined;

  @Column()
  start_date: Date | undefined;

  @Column()
  end_date: Date | undefined;

  @Column()
  expected_return_date: Date | undefined;

  @Column()
  total: number | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;

  constructor() {}
}

export { Rental };
