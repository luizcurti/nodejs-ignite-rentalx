import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Category } from "./Category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {
  @PrimaryColumn()
  id: string = uuidV4();

  @Column()
  name: string | undefined;

  @Column()
  description: string | undefined;

  @Column()
  daily_rate: number | undefined;

  @Column()
  available: boolean | undefined;

  @Column()
  license_plate: string | undefined;

  @Column()
  fine_amount: number | undefined;

  @Column()
  brand: string | undefined;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category | undefined;

  @Column()
  category_id: string | undefined;

  @ManyToMany(() => Specification)
  @JoinTable({
    name: "specifications_cars",
    joinColumns: [{ name: "car_id" }],
    inverseJoinColumns: [{ name: "specification_id" }],
  })
  specifications: Specification[] | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor() { 
    this.available = true;
  }
}

export { Car };
