import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { User } from "./User";

@Entity("users_tokens")
class UserTokens {
  @PrimaryColumn()
  id: string = uuidv4();

  @Column()
  refresh_token: string  | undefined;

  @Column()
  user_id: string | undefined;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User | undefined;

  @Column()
  expires_date: Date | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor() {}
}

export { UserTokens };
