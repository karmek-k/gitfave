import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryColumn()
  id!: string;
}

export default User;
