import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryColumn()
  id!: number;
}

export default User;
