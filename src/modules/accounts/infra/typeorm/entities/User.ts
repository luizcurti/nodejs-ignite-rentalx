import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Expose } from "class-transformer";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string = uuidV4(); 

  @Column()
  name: string | undefined;

  @Column()
  email: string | undefined;

  @Column()
  password: string | undefined;

  @Column()
  driver_license: string | undefined;

  @Column()
  isAdmin: boolean | undefined;

  @Column()
  avatar: string | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @Expose({ name: "avatar_url" })
  avatar_url(): string | null  {
    switch (process.env.disk) {
      case "local":
        return `${process.env.APP_API_URL}/avatar/${this.avatar}`;
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`;
      default:
        return null;
    }
  }

  constructor() {
  }
}

export { User };
